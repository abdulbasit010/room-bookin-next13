"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
	const router = useRouter();
	const [location, setLocation] = useState("");

	return (
		<div className="text-left text-lg py-3 m-auto flex justify-center">
			{/* <input
				className="rounded  mr-3 p-2 w-[450px]"
				type="text"
				placeholder="State, city or town"
				value={location}
				onChange={(e) => {
					setLocation(e.target.value);
				}}
			/> */}
			<select
				className="rounded  mr-3 p-2 w-[450px]"
				id=""
				value={location}
				onChange={(e) => {
					setLocation(e.target.value);
				}}
			>
				<option>City</option>
				<option value="faisalabad">Faisalabad</option>
				<option value="lahore">Lahore</option>
				<option value="islamabad">Islamabad</option>
				<option value="karachi">Karachi</option>
			</select>

			<button
				className="rounded bg-black px-9 py-2 text-white"
				onClick={() => {
					if (location === "") {
						return;
					}
					router.push(`/search?location=${location}`);
					setLocation("");
				}}
			>
				Search
			</button>
		</div>
		// <section className="bg-blue-500 search-form-section">
		// 	<div className="container p-4 px-3 px-md-4 px-lg-5">
		// 		<div className="search-form">
		// 			<p className="text-white text-4xl font-bold  mb-3">Search for Hotels</p>
		// 			<p className="text-xl text-white">Find the best and most affordable hotel rooms across Pakistan </p>
		// 			<form className="mt-4">
		// 				<div className="grid grid-cols-12 gap-4 positon-relative">
		// 					<div className="col-span-4 md:col-span-6">
		// 						<div className="input-group">
		// 							<span className="input-group-text">
		// 								<svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 									<g clipPath="url(#clip0_2120_178065)">
		// 										<path d="M12.9002 8.70142V4.36399C12.9002 4.30266 12.9011 4.23767 12.902 4.17024C12.9048 3.96724 12.9079 3.74215 12.8878 3.52838C12.8611 3.24402 12.7926 2.96657 12.6179 2.77773C12.4429 2.58856 12.1763 2.50435 11.9035 2.46593C11.6626 2.432 11.4087 2.4328 11.1952 2.43348C11.1661 2.43357 11.1379 2.43366 11.1105 2.43366H10.0007V0.603338C10.0007 0.425046 9.93522 0.25335 9.81756 0.126185C9.69979 -0.00111099 9.53918 -0.0734375 9.37082 -0.0734375C9.20245 -0.0734375 9.04184 -0.00111095 8.92407 0.126185C8.80642 0.25335 8.74092 0.425046 8.74092 0.603338V2.43366H7.63114C7.62203 2.43366 7.61282 2.43366 7.60354 2.43366C7.37866 2.43359 7.1036 2.4335 6.84368 2.47485C6.57382 2.51779 6.31113 2.60666 6.13659 2.79531C5.96226 2.98374 5.89032 3.25621 5.86032 3.53653C5.83648 3.75921 5.8386 3.99399 5.84049 4.20465C5.84098 4.25962 5.84146 4.31295 5.84146 4.36399V6.33592C5.7398 6.37806 5.64184 6.42987 5.54872 6.49073C5.54869 6.49075 5.54867 6.49076 5.54865 6.49078L2.06945 8.74707L2.06944 8.74708C2.0228 8.77733 1.9722 8.80806 1.92022 8.83961C1.8346 8.8916 1.74525 8.94584 1.66375 9.00401C1.53015 9.09937 1.406 9.21257 1.32681 9.36377C1.24798 9.51427 1.21769 9.69494 1.20634 9.87509C1.19811 10.0055 1.19972 10.1397 1.20122 10.2645C1.20178 10.3116 1.20233 10.3574 1.20233 10.4011V18.153C1.20233 18.1855 1.20222 18.2189 1.20211 18.2532C1.20136 18.4801 1.20049 18.7422 1.23085 18.9905C1.26566 19.2753 1.34252 19.552 1.51661 19.7402C1.69135 19.929 1.94952 20.0132 2.21484 20.0515C2.44767 20.0851 2.69353 20.0843 2.90478 20.0836C2.93459 20.0835 2.96371 20.0834 2.992 20.0834H15.7496C15.762 20.0834 15.7745 20.0834 15.7872 20.0834C16.0103 20.0835 16.2831 20.0837 16.5412 20.0436C16.8131 20.0015 17.0781 19.9134 17.2528 19.7246C17.4273 19.5359 17.497 19.2625 17.5248 18.9815C17.5461 18.7668 17.5433 18.5405 17.5408 18.3359C17.54 18.2725 17.5393 18.2112 17.5393 18.153V10.6317C17.5393 10.4044 17.5428 10.2122 17.5458 10.0484C17.5497 9.83829 17.5526 9.67489 17.5463 9.54411C17.5347 9.30637 17.4919 9.16026 17.3625 9.02033C17.2787 8.92975 17.1997 8.86267 17.1109 8.8143C17.0219 8.7658 16.9258 8.73753 16.8094 8.72111C16.635 8.6965 16.4083 8.69796 16.0838 8.70005C15.9824 8.7007 15.8715 8.70142 15.7496 8.70142H12.9002ZM7.00125 8.14469V18.7298H2.992L2.97896 18.7298C2.90366 18.7299 2.81489 18.7299 2.73148 18.7175C2.64187 18.7042 2.5692 18.6779 2.52676 18.6321C2.48461 18.5865 2.46593 18.5147 2.4602 18.4246C2.4565 18.3663 2.4583 18.3082 2.46009 18.2505C2.4611 18.2178 2.46211 18.1853 2.46211 18.153L2.46211 10.4023L2.46211 10.4022C2.46189 10.2929 2.46871 10.1767 2.5117 10.0945C2.55391 10.0138 2.63244 9.96272 2.72112 9.90528L2.72115 9.90526L6.20047 7.64889C6.28076 7.59689 6.37202 7.56905 6.46498 7.56783C6.55793 7.56661 6.64976 7.59205 6.73115 7.6419C6.81257 7.69178 6.88078 7.76441 6.92841 7.85278C6.97605 7.94117 7.00127 8.04191 7.00125 8.14469ZM8.26103 8.1447C8.26103 7.28188 7.75796 6.60676 7.10125 6.33705V4.36524C7.10125 4.34019 7.10079 4.31431 7.10032 4.28792C7.09916 4.22263 7.09795 4.15423 7.10349 4.08758C7.11132 3.99346 7.13197 3.91791 7.17435 3.8721C7.21615 3.82691 7.2858 3.80377 7.37311 3.79391C7.43992 3.78637 7.50921 3.78721 7.57413 3.788C7.59359 3.78824 7.61265 3.78847 7.63114 3.78847H11.1105C11.1196 3.78847 11.1288 3.78844 11.1381 3.78842C11.2091 3.78823 11.2845 3.78803 11.3556 3.79866C11.4361 3.8107 11.502 3.83554 11.545 3.88207C11.589 3.92953 11.6142 4.00482 11.6274 4.09557C11.6403 4.18523 11.6404 4.28152 11.6404 4.36524V8.82349C11.6255 8.82915 11.6104 8.83484 11.5951 8.8406C11.4468 8.89657 11.2846 8.95777 11.1346 9.03621C10.9576 9.12877 10.7924 9.24781 10.682 9.41672C10.5718 9.58519 10.5223 9.79399 10.4995 10.0058C10.4795 10.1928 10.48 10.3867 10.4805 10.5624C10.4805 10.5859 10.4806 10.609 10.4806 10.6318V18.7298H8.26103V8.1447ZM11.8301 10.16C11.8736 10.1129 11.9417 10.0854 12.0238 10.0706C12.1053 10.0559 12.1931 10.055 12.2703 10.055H15.7496C15.8412 10.055 15.9115 10.0529 15.9662 10.0513L15.9769 10.051C16.0341 10.0493 16.0706 10.0486 16.0981 10.051C16.1238 10.0532 16.1381 10.058 16.1511 10.066C16.166 10.0751 16.1824 10.0902 16.2095 10.1195C16.2553 10.169 16.2724 10.2121 16.2788 10.2833C16.2833 10.3327 16.2823 10.3915 16.2811 10.4715C16.2804 10.5172 16.2795 10.5699 16.2795 10.6317V18.153C16.2795 18.1772 16.2799 18.2015 16.2803 18.226C16.2813 18.2897 16.2824 18.3541 16.2765 18.4166C16.2684 18.5026 16.2479 18.5724 16.2048 18.619C16.1613 18.666 16.0896 18.695 16.0032 18.7113C15.9179 18.7274 15.826 18.7298 15.7496 18.7298H11.7404V10.6317C11.7404 10.6239 11.7404 10.6159 11.7404 10.6079C11.7402 10.5299 11.7401 10.446 11.7506 10.3672C11.7623 10.2798 11.7862 10.2074 11.8301 10.16Z" fill="#667085" stroke="#667085" strokeWidth="0.1" />
		// 									</g>
		// 									<defs>
		// 										<clipPath id="clip0_2120_178065">
		// 											<rect width="18.75" height={20} fill="white" />
		// 										</clipPath>
		// 									</defs>
		// 								</svg>
		// 							</span>
		// 							<select className="form-control form-select" aria-label="City" name="city" id="city" placeholder="City" required>
		// 								<option value={0}>City</option>
		// 								<option value={1}>Karachi</option>
		// 								<option value={2}>Lahore</option>
		// 								<option value={3}>Faisalabad</option>
		// 								<option value={9}>Islamabad</option>
		// 								<option value={10}>Quetta</option>

		// 							</select>
		// 						</div>
		// 					</div>
		// 					<div className="col-span-4 md:col-span-6">
		// 						<div className="input-group">
		// 							<div className="dp__main dp__theme_light">
		// 								<div aria-label="Datepicker input" role="textbox" aria-multiline="false" aria-disabled="false" aria-readonly="false">

		// 									<div className="dp__input_wrap">
		// 										<input className="dp__pointer dp__input_readonly dp__input dp__input_reg form-control" inputMode="none" placeholder="Check In" required autoComplete="off" />
		// 									</div>
		// 								</div>

		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="col-lg-4 col-md-6">
		// 						<div className="input-group">
		// 							<div className="dp__main dp__theme_light">
		// 								<div aria-label="Datepicker input" role="textbox" aria-multiline="false" aria-disabled="false" aria-readonly="false">

		// 									<div className="dp__input_wrap"><input className="dp__pointer dp__input_readonly dp__input dp__input_reg form-control" inputMode="none" placeholder="Check Out" required autoComplete="off" /></div>
		// 								</div>

		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="col-lg-5 col-md-6">
		// 						<select className="form-select form-control" required>
		// 							<option>Rooms</option>
		// 							<option value={1}>1</option>
		// 							<option value={2}>2</option>
		// 							<option value={3}>3</option>
		// 							<option value={3}>4</option>
		// 						</select>
		// 					</div>
		// 					<div className="col-lg-5 col-md-6">
		// 						<div className="dropdown">
		// 							<input type="text" className="form-control bg-white" placeholder="No of Person" data-bs-toggle="dropdown" aria-expanded="false" />
		// 							<div className="dropdown-menu p-3 w-100" id="passengers">
		// 								<div className="row g-3 align-items-center">
		// 									<div className="col-4"><label htmlFor="adult">Adult</label></div>
		// 									<div className="col-8 d-flex justify-content-end">
		// 										<div className="value-button decrease btn" ><i className="fa fa-minus text-gray-500 fa-md" /></div>
		// 										<input type="number" id="number" required />
		// 										<div className="value-button increase btn" ><i className="fa fa-plus text-gray-500 fa-md" /></div>
		// 									</div>
		// 									<div className="col-4"><label htmlFor="child">Child</label></div>
		// 									<div className="col-8 d-flex justify-content-end">
		// 										<div className="value-button decrease btn" ><i className="fa fa-minus text-gray-500 fa-md" /></div>
		// 										<input type="number" id="number" />
		// 										<div className="value-button increase btn" ><i className="fa fa-plus text-gray-500 fa-md" /></div>
		// 									</div>
		// 									<div className="col-4"><label htmlFor="infant">Infant</label></div>
		// 									<div className="col-8 d-flex justify-content-end">
		// 										<div className="value-button decrease btn" ><i className="fa fa-minus text-gray-500 fa-md" /></div>
		// 										<input type="number" id="number" />
		// 										<div className="value-button btn" ><i className="fa fa-plus text-gray-500 fa-md" /></div>
		// 									</div>
		// 									<div className="col-12"><span className="btn btn-primary w-100 close-button">Done</span></div>
		// 								</div>
		// 							</div>
		// 						</div>
		// 					</div>
		// 					<div className="col-md-6 col-lg-2">
		// 						<button type="submit" className="btn btn-secondary text-white w-100">
		// 							<svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
		// 								<path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
		// 							</svg>
		// 							Search
		// 						</button>
		// 					</div>
		// 				</div>
		// 			</form>
		// 		</div>

		// 	</div>
		// </section>
	);
}
