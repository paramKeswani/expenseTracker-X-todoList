import React, { useState, useEffect, useRef } from 'react';
import './progressBar.css'; // import your custom CSS for styling

export default function DynamicDemo() {
    const [value, setValue] = useState(0);
    const toast = useRef(null);
    const interval = useRef(null);

    useEffect(() => {
        let _val = value;

        interval.current = setInterval(() => {
            _val += Math.floor(Math.random() * 10) + 1;

            if (_val >= 100) {
                _val = 100;
                if (toast.current) {
                    toast.current.style.display = 'block'; // Show the toast
                    setTimeout(() => {
                        if (toast.current) {
                            toast.current.style.display = 'none'; // Hide the toast after 2 seconds
                        }
                    }, 2000);
                }
                clearInterval(interval.current); // Stop the interval
            }

            setValue(_val);
        }, 2000);

        return () => {
            if (interval.current) {
                clearInterval(interval.current); // Cleanup on unmount
                interval.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (value === 100) {
            if (toast.current) {
                toast.current.style.display = 'block';
                setTimeout(() => {
                    if (toast.current) {
                        toast.current.style.display = 'none';
                    }
                }, 2000);
            }
        }
    }, [value]);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${value}%`, backgroundColor: value >= 100 ? '#28a745' : '#007bff' }}>
                {value}%
            </div>
            <div ref={toast} className="toast">
                Process Completed
            </div>
        </div>
    );
}
