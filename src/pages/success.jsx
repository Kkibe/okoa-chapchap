import React, { useState, useEffect } from 'react';

const Success = () => {
    return (
        <div  >
            <h1 style={{
                width: "100%",
                textAlign: "center"
            }}>Success!</h1>
            <p style={{
                fontSize: "20px",
                fontWeight: "bolder",
                textAlign: "center",
                margin: "10px 0 10px 0"
            }}>Your Apllication Was Submitted Sucessfly! Wait for up to 24 hours to be processed.</p>
        </div>
    );
};

export default Success;