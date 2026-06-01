"use client"

import React, { useState } from 'react'

import Image from 'next/image';
import { Send } from 'lucide-react';
import { MdEmail } from 'react-icons/md';

function Contact() {
    const [error, setError] = useState<string>("");
    const [inputError, setInputError] = useState<string>("");

    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleForm = async (e :  React.FormEvent<HTMLFormElement>) => {
        try {
        e.preventDefault();
        setStatus('sending');

        if (!formData.name || !formData.email || !formData.message) {
            setInputError('Please fill in all fields.');
            setStatus('');

            setTimeout(() => {
                setInputError('');
            }, 4000);
            return;
        }
    

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setStatus('');
            }, 6000);
        } else {
            setStatus('error');
        }
        } catch (error) {
        setStatus('error' + error);
        }
    }

  return (
    <div className="bg-[#BBE1BB] w-full overflow-x-hidden min-h-screen relative py-10">
        <div className=" w-50 h-50 rounded-full absolute -top-20 -right-20 bg-[#033C20] z-0"></div>

        
        <div className="main z-30 max-w-full w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3">

            <div className="left h-full w-full md:col-span-2">
                <Image src="/images/illustrations/shahid-mehmood-0KgJaDiOS7c-unsplash.png" className=" w-full h-full object-cover" alt="constct image" width={1200} height={800}/>
            </div>

            <div className="right flex flex-col items-center justify-center">
                <div className="box bg-white border-2 border-gray-50 rounded p-4">
                    <h1 className=" text-4xl mb-2 font-bold">Stay in Touch</h1>
                    <p className=" text-sm mb-2">Have questions or need help? Send us a message and our team will respond within one business day.</p>
                    <form onSubmit={handleForm} >
                        <input 
                            type="text" 
                            name="name" className=" p-3 border border-gray-300 outline-0 rounded mt-3 w-full" 
                            id="name" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="title" />
                        <input 
                            type="email" 
                            name="email" className=" p-3 border border-gray-300 outline-0 rounded mt-3 w-full" 
                            id="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="info@abalaweOnlineStore.com" />
                     
                        
                         <textarea
                            required
                            placeholder="Message"
                            rows={4}
                            className="p-3 border border-gray-300 outline-0  mt-3 w-full rounded"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />

                         <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="bg-blue-500 text-white px-4 py-3 mt-2 rounded disabled:bg-gray-400"
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="text-green-600 mt-2 bg-green-100 p-2 rounded"> Thank you! Your message has been sent successfully.</p>
                        )}
                        {status === 'error' && (
                            <p className="text-red-600 mt-2 bg-red-100 p-2 rounded">Failed to send message. Please try again.</p>
                        )}

                        {inputError && (
                            <p className="text-red-600 mt-2 bg-red-100 p-2 rounded">{inputError}</p>
                        )}

                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact