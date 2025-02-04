{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function redirectToWhatsApp(product) \{\
    const phoneNumber = "+221706429780"; // Num\'e9ro de t\'e9l\'e9phone WhatsApp\
    const message = `Bonjour, je souhaite acheter le Tote Bag $\{product\}.`; // Message personnalis\'e9\
    const url = `https://wa.me/$\{phoneNumber\}?text=$\{encodeURIComponent(message)\}`;\
    window.open(url, "_blank"); // Ouvre WhatsApp dans un nouvel onglet\
\}}