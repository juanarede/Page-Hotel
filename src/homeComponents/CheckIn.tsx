import React, { useRef, useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const CheckIn: React.FC = () => {
    const checkInRef = useRef<HTMLInputElement>(null);
    const checkOutRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (checkInRef.current) {
            flatpickr(checkInRef.current, {
                dateFormat: 'Y-m-d',
            });
        }
        if (checkOutRef.current) {
            flatpickr(checkOutRef.current, {
                dateFormat: 'Y-m-d',
            });
        }
    }, []);

    return (
        <div
            style={{ marginTop: '-25px' }}
            className="relative flex justify-center min-h-screen pb-5 items container-fluid animate__animated animate__fadeIn"
        >
            <div className="container">
                <div className="bg-white shadow p-9">
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-10">
                        <div className="grid grid-cols-2 gap-2 md:col-span-8 md:grid-cols-4">
                            <div className="col-span-1">
                                <div className="relative">
                                    <input
                                        ref={checkInRef}
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-lg form-control"
                                        placeholder="Check in"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="relative">
                                    <input
                                        ref={checkOutRef}
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-lg form-control"
                                        placeholder="Check out"
                                    />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <select className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg">
                                    <option selected>Adult</option>
                                    <option value="1">Adult 1</option>
                                    <option value="2">Adult 2</option>
                                    <option value="3">Adult 3</option>
                                </select>
                            </div>
                            <div className="col-span-1">
                                <select className="w-full p-2 text-gray-400 border border-gray-300 rounded-lg">
                                    <option selected>Child</option>
                                    <option value="1">Child 1</option>
                                    <option value="2">Child 2</option>
                                    <option value="3">Child 3</option>
                                </select>
                            </div>

                        </div>
                        <div className="md:col-span-2">
                            <button className="w-full px-4 py-2 text-white bg-[#00acee] rounded-lg hover:bg-[#0099cc]">
                                Reservar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckIn;
