'use client'
import { useState } from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react';
import axios from 'axios';

const BookingModal = ({ openModal, setOpenModal, hotel_id, room_id }: any) => {
    const [alert, setAlert] = useState('')
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        check_in: "",
        check_out: "",
    });

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            check_in: "",
            check_out: "",
        });
    };
    const { name, email, check_in, check_out } = formData;

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.post('/api/booking', { ...formData, hotel_id, room_id })
        setAlert(res.data.msg)
        resetForm()
    };

    return (
        <Modal className="bg-gray-800" position={'center'} dismissible size={'sm'} show={openModal === 'dismissible'} onClose={() => setOpenModal(undefined)}>
            <Modal.Header />
            <Modal.Body className="">
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">Guest details</h3>

                    {alert !== '' && <div id="alert-3" className="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div className="ml-3 text-sm font-medium">
                            {alert}
                        </div>
                        <button type="button" onClick={() => setAlert('')} className="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your name"
                                id="name"
                                name='name'
                                value={name}
                                onChange={handleChange} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Your email" />
                            </div>
                            <TextInput
                                placeholder="name@company.com"
                                id="email"
                                name='email'
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="checkIn" value="Check In time" />
                            </div>
                            <TextInput
                                id="checkIn"
                                type="date"
                                name='check_in'
                                value={check_in}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="checkOut" value="Check Out time" />
                            </div>
                            <TextInput
                                id="checkOut"
                                type="date"
                                name='check_out'
                                value={check_out}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="w-full mt-4">
                            <Button type='submit' className="bg-blue-500 w-full">Submit</Button>
                        </div>
                    </form>

                </div>
            </Modal.Body>
        </Modal>
    )
}

export default BookingModal
