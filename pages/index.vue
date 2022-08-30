<template lang="pug">
body
    .bg-blue-1
        .container.max-w-full
            .deer
                img(id="BG" src="~//static/img/BG.png" class="h-screen w-screen object-cover")
                img(id="G" src="~//static/img/G.png" class="h-screen w-screen object-cover")
                img(id="B" src="~//static/img/B.png" class="h-screen w-screen object-cover")
                img(id="TL" src="~//static/img/TL.png" class="h-screen w-screen object-cover")
                img(id="TR" src="~//static/img/TR.png" class="h-screen w-screen object-cover")
                img(id="YL" src="~//static/img/YL.png" class="h-screen w-screen object-cover")
                img(id="YR" src="~//static/img/YR.png" class="h-screen w-screen object-cover")

        .container(id="About").max-w-full
            .flex.justify-around.h-full
                .space-y-4.grid.content-center
                    p.text-4xl.font-bold ME
                    p.text-2xl I'm a web developer from Thailand.
                        p.text-2xl I'm passionate about making websites.
                        p.text-2xl I think that a good website is easy to use and secure.
                .flex.flex-col.space-y-6.justify-center
                    img(src="~//static/img/Profile.jpg" class="object-cover h-80 w-80 rounded-full")
                    .text-center.space-y-2
                        p.text-3xl.font-bold Jattapol Suayoosay
                        p.text-name.text-sm.font-bold February 27th, 2000
                        p.text-name.text-lg.font-bold Frontend Developer
                
        .container(id="Resume").max-w-full
            .flex.justify-around.pt-40
                a.text-4xl Resume
            .flex.justify-around.pt-12
                a.text-2xl Experience
                a
            .flex.justify-around.pt-12
                .space-y-20
                    .flex
                        .border-r-4.pr-10.border-gray-400.pt-3
                            p.unactive-box 04 - 05/2021
                        .pl-10
                            p.text-2xl Fullstack Developer (Internship)
                            p.text-xl.text-sub-title OneDee Solution Co., Ltd.,
                    .flex
                        .border-r-4.pr-10.border-gray-400.pt-3
                            p.unactive-box 03/2021
                        .pl-10
                            p.text-2xl Hackathon Boot Camp (Attend)
                            p.text-xl.text-sub-title 20Scoops CNX Co., Ltd.,
                    .flex
                        .border-r-4.pr-10.border-gray-400.pt-3
                            p.unactive-box 04/2022 - current
                        .pl-10
                            p.text-2xl Front-end Developer (Internship)
                            p.text-xl.text-sub-title OneDee Solution Co., Ltd.,
            
        .container(id="Skills").max-w-full
            .flex.justify-around.pt-40
                a.text-4xl Skills
            .flex.justify-around.pt-12
                a.text-2xl Technical Skills
                a
            .flex.justify-around.pt-4
                .flex
                    .pr-32
                        .flex
                            .pt-16.pl-20
                                a.text-xl Programming Languages
                                .pt-8.pl-20
                                    .flex.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"/><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"/></svg>
                                        a.skill.text-lg Html
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffd600" d="M6,42V6h36v36H6z"/><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/></svg>
                                        a.skill.text-lg JavaScrip
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><rect width="36" height="36" x="6" y="6" fill="#1976d2"/><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"/><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"/></svg>
                                        a.skill.text-lg TypeScrip
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"/><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"/><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/></svg>
                                        a.skill.text-lg css
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"/><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"/></svg>
                                        a.skill.text-lg Python
                        .flex
                            .pt-16.pl-20
                                a.text-xl Databescs
                                .pt-8.pl-20
                                    .flex.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"/><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"/><path fill="#dcedc8" d="M23 28H25V36H23z"/><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"/><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"/></svg>
                                        a.skill.text-lg MongoDB
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#00796b" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z"/><path fill="#00796b" d="M13.441,29.281h1.92v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92 c0.008,0,0,5.968,0,5.993c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0 c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281 z"/><path fill="#f57f17" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536v-1.368 c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z"/><path fill="#f57f17" d="M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96h-4.435 c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z"/><path fill="#f57f17" d="M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"/><path fill="#00796b" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"/><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"/></svg>
                                        a.skill.text-lg MySQL
                                    
                    .pl-32
                        .flex
                            .pt-16.pl-20
                                a.text-xl Framework
                                .pt-8.pl-20
                                    .flex.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"/><polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"/></svg>
                                        a.skill.text-lg Vue.Js
                                    .flex.pt-2.space-x-4
                                        img(src="~/static/img/nuxt.png" width="48px" height="48px")
                                        a.skill.text-lg Nuxt.Js
                                    .flex.pt-2.space-x-4
                                        img(src="~/static/img/nestjs.png" width="48px" height="48px")
                                        a.skill.text-lg Nest.Js
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"/><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"/><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"/><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"/><polygon fill="#084994" points="21,39 30,36 27,33"/></svg>
                                        a.skill.text-lg Flutter
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4e7ab5" d="M20,28.9C8.598,28.9,0,25.17,0,20s8.598-9,20-9s20,3.83,20,9S31.402,28.9,20,28.9z M20,13.932 c-9.729,0-17.125,3.266-17.125,6.131S10.271,26.068,20,26.068s17.125-3.266,17.125-6.131S29.729,13.932,20,13.932z"/><path fill="#4e7ab5" d="M12.402,38C12.401,38,12.402,38,12.402,38c-0.931,0-1.781-0.216-2.528-0.642 c-1.22-0.697-2.095-1.928-2.532-3.562c-1.146-4.282,0.703-11.482,4.713-18.344C16.76,7.407,23.007,2.003,27.599,2.003 c0.93,0,1.78,0.216,2.527,0.642c1.218,0.695,2.094,1.925,2.531,3.558c1.147,4.282-0.703,11.483-4.715,18.345 C23.241,32.594,16.995,38,12.402,38z M27.599,5.003c-2.888,0-8.409,4.193-12.954,11.963c-4.123,7.056-5.332,12.909-4.404,16.054 c0.251,0.849,0.605,1.438,1.121,1.732c2.361,1.348,8.809-2.85,13.991-11.717c4.125-7.057,5.46-12.785,4.406-16.055 c-0.271-0.841-0.604-1.435-1.119-1.728C28.347,5.084,28.006,5.003,27.599,5.003z"/><path fill="#4e7ab5" d="M27.599,37.997C27.599,37.997,27.599,37.997,27.599,37.997c-4.597-0.001-10.843-5.405-15.544-13.449 c-4.01-6.862-5.859-14.063-4.713-18.344C7.779,4.57,8.654,3.339,9.873,2.643C10.621,2.216,11.471,2,12.4,2 c4.595,0,10.84,5.406,15.542,13.452c4.011,6.861,5.86,14.062,4.714,18.345c-0.438,1.633-1.313,2.863-2.53,3.558 C29.379,37.781,28.528,37.997,27.599,37.997z M12.4,5c-0.407,0-0.747,0.082-1.04,0.248c-0.515,0.294-0.874,0.881-1.12,1.732 c-0.928,3.208,0.281,8.999,4.404,16.055c4.541,7.769,10.063,11.962,12.954,11.962l0,0c0.408,0,0.748-0.082,1.041-0.249 c0.514-0.292,0.883-0.876,1.118-1.728c0.867-3.146-0.281-9-4.405-16.055C20.811,9.194,15.29,5,12.4,5z"/><path fill="#8bb7f0" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"/><path fill="#4e7ab5" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"/><path fill="#8bb7f0" d="M20,28.068C9.346,28.068,1,24.524,1,20s8.346-8.068,19-8.068S39,15.476,39,20 S30.654,28.068,20,28.068z M20,12.932c-9.757,0-18,3.237-18,7.068s8.243,7.068,18,7.068S38,23.832,38,20S29.757,12.932,20,12.932z"/><path fill="#8bb7f0" d="M12.402,37C12.401,37,12.402,37,12.402,37c-0.755,0-1.438-0.172-2.033-0.511 c-0.996-0.569-1.689-1.562-2.062-2.952c-1.081-4.037,0.729-10.938,4.61-17.581C17.379,8.33,23.416,3.003,27.599,3.003 c0.754,0,1.438,0.172,2.032,0.511c0.995,0.568,1.688,1.56,2.061,2.948c1.081,4.037-0.729,10.938-4.612,17.582 C22.621,31.672,16.586,37,12.402,37z M27.599,4.003c-3.784,0-9.595,5.239-13.817,12.458c-3.695,6.325-5.507,13.083-4.508,16.818 c0.301,1.123,0.836,1.91,1.592,2.342C11.307,35.872,11.823,36,12.401,36c3.785,0,9.595-5.24,13.814-12.461 c3.697-6.326,5.51-13.085,4.509-16.818c-0.3-1.121-0.835-1.908-1.59-2.338C28.693,4.131,28.177,4.003,27.599,4.003z"/><g><path fill="#8bb7f0" d="M27.599,36.997C27.599,36.997,27.599,36.997,27.599,36.997c-4.187-0.001-10.224-5.327-14.681-12.953 C9.036,17.401,7.227,10.5,8.308,6.463c0.372-1.39,1.065-2.383,2.062-2.952C10.964,3.172,11.647,3,12.4,3 c4.185,0,10.221,5.328,14.679,12.956c3.883,6.642,5.692,13.543,4.61,17.582c-0.371,1.389-1.064,2.381-2.059,2.948 C29.036,36.825,28.353,36.997,27.599,36.997z M12.4,4c-0.577,0-1.094,0.128-1.535,0.379c-0.756,0.432-1.291,1.219-1.592,2.342 c-0.999,3.734,0.813,10.493,4.508,16.818C18,30.757,23.812,35.996,27.599,35.997l0,0c0.578,0,1.095-0.128,1.536-0.38 c0.754-0.43,1.289-1.217,1.589-2.338c1-3.735-0.812-10.494-4.508-16.818C21.996,9.241,16.187,4,12.4,4z"/></g></svg>
                                        a.skill.text-lg React
                        .flex
                            .pt-10.pl-20
                                a.text-xl Tools
                                .pt-8.pl-20
                                    .flex.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#e64a19" d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"/><path fill="#7c4dff" d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"/><path fill="#66bb6a" d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"/><path fill="#ff7043" d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"/><circle cx="32" cy="24" r="7" fill="#29b6f6"/></svg>
                                        a.skill.text-lg Figma
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ff41c8" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4 V10z"/><path fill="#16020b" d="M9,9v30h30V9H9z M19.093,21.695l1.914-4.883h3.291l-3.34,7.051l3.418,7.168h-3.33l-1.953-4.971 l-1.943,4.971h-3.33l3.418-7.168l-3.35-7.051h3.291L19.093,21.695z M25.069,25.426c0-1.732,0.293-3.024,0.879-3.877 s1.438-1.279,2.559-1.279c0.813,0,1.491,0.352,2.031,1.055v-5.293h2.783v15h-2.51l-0.127-1.074c-0.566,0.847-1.296,1.27-2.188,1.27 c-1.106,0-1.951-0.423-2.534-1.27s-0.881-2.09-0.894-3.73V25.426z M27.843,26.119c0,1.042,0.11,1.77,0.332,2.183 s0.596,0.62,1.123,0.62c0.547,0,0.96-0.244,1.24-0.732v-4.824c-0.273-0.521-0.684-0.781-1.23-0.781 c-0.508,0-0.879,0.205-1.113,0.615s-0.352,1.14-0.352,2.188V26.119z"/></svg>
                                        a.skill.text-lg Adobe XD
                                    .flex.pt-2.space-x-4
                                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"/><path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"/><path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"/></svg>
                                        a.skill.text-lg PhotoShop
                                    .flex.pt-2.space-x-4
                                        img(src="~/static/img/robot.png" width="48px" height="48px")
                                        a.skill.text-lg ROBO 3T
                                    .flex.pt-2.space-x-4
                                        img(src="~/static/img/postman.png" width="48px" height="48px")
                                        a.skill.text-lg Postman
    
        .container(id="Projects").max-w-full
            .flex.justify-around.pt-40
                a.text-4xl Projects
            .px-48.pt-12
                .flex    
                    a.text-xl Works
                hr.info.my-8
                .grid.grid-cols-4.gap-4.pl-6.pr-6
                    .award
                        img(src="~//static/img/works/CubeX.jpg" class="h-60 w-96")
                        p Clone web CubeX
                    .award
                        img(src="~//static/img/works/madoobaan.jpg" class="h-60 w-96")
                        p OneDee Solution Projects Madoobaan 

            .px-48.pt-10
                .flex    
                    a.text-xl Awards
                hr.info.my-8
                .grid.grid-cols-4.gap-4.pl-6.pr-6
                    .award
                        img(src="~//static/img/awards/20scoops.jpg" class="h-60 w-96")
                        p Join the training with 20scoops company
                    .award
                        img(src="~//static/img/awards/IntroductiontoNetworks.jpg" class="h-60 w-96")
                        p Cisco Networking Academy
                        p Introduction to Networks
                    .award
                        img(src="~//static/img/awards/SwitchingRoutingandWireless Essentials.jpg" class="h-60 w-96")
                        p Cisco Networking Academy
                        p Switching, Routing, and Wireless Essentials
        

        .container.max-w-full
            .flex.justify-around.pt-40
                a.text-4xl Contact
            .wrapper.mb-60
                form(ref="form" @submit.prevent="sendEmail")
                    .text-center
                        p.text-black.text-4xl Email to Jattapol
                    .regis.pl-60.pt-12
                        .px-6.pt-5.items-center
                            .pb-4.space-y-2
                                p Name
                                input(v-model="name" name="name" class="shadow appearance-none border rounded py-2 px-4 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text")
                            .pb-4.space-y-2
                                p Email
                                input(v-model="email" name="email" class="shadow appearance-none border rounded py-2 px-4 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text")
                            .pb-4.space-y-2
                                p.text.black Message
                                textarea(v-model="message" name="message" class="shadow appearance-none border rounded py-2 px-4 w-96 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text")
                            .pb-4.pt-2
                                button(type="submit" class="w-96 h-10 text-white ocus:outline-none bg-blue-1 focus:bg-blue-2 focus:ring focus:ring-blue-200 rounded") Send

        .container-contact
            .signature1
                a(href="https://github.com/jattapol456") Github | 
                a(href="https://gitlab.com/jattapol456") Gitlab 
                .pt-1
                    a Contact -> 
                    a(href="https://www.facebook.com/profile.php?id=100009528041096") Facebook | 
                    a 0947256049 
                
</template>

<script lang="js">
import emailjs from '@emailjs/browser';

export default ({
    data: () => {
        return {
            name: "",
            email: "",
            message: "",
        }
    },

    methods: {
        sendEmail() {
            this.name = "";
            this.email = "";
            this.message = "";
            emailjs.sendForm('service_cp0vw2a', 'template_wl7qdwq', this.$refs.form, 'user_Gpso9qPkwC3lnyj3thmst')
                .then((result) => {
                    this.$refs.form.reset();
                    this.name = "";
                    this.email = "";
                    this.message = "";
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        },
    },
    mounted() {
        const B = document.getElementById('B')
        const G = document.getElementById('G')
        const TL = document.getElementById('TL')
        const TR = document.getElementById('TR')
        const YL = document.getElementById('YL')
        const YR = document.getElementById('YR')
        const about = document.getElementById('about')

        window.addEventListener('scroll', function() {
            const value = window.scrollY
            B.style.top = value * -1.25 + 'px'
            G.style.left = value * -0.25 + 'px'
            TL.style.left = value * -1.25 + 'px'
            TR.style.left = value * 1.25 + 'px'
            YL.style.left = value * 0.25 + 'px'
            YR.style.left = value * -0.25 + 'px'
            about.style.marginTop  = value * -0.25 + 'px'
        })
    },
})
</script>

<style lang="scss" scoped>
body {
  overflow-x: hidden;
}

.container {
  height: 100vh;
  &#about {
    text-align: center;
  }
}

.deer img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}

.signature1 {
  position: fixed;
  font-weight: 100;
  bottom: 10px;
  left: 0;
  letter-spacing: 4px;
  font-size: 10px;
  width: 100vw;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
}
.unactive-box {
  display: flex;
  height: 1.75rem;
  width: 8rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(114, 114, 114, var(--tw-border-opacity));
  font-size: 0.75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgba(114, 114, 114, var(--tw-text-opacity));
}

.text-sub-title {
  --tw-text-opacity: 1;
  color: rgba(178, 178, 178, var(--tw-text-opacity));
}
.text-name {
  --tw-text-opacity: 1;
  color: rgba(178, 178, 178, var(--tw-text-opacity));
}
.skill {
  --tw-text-opacity: 1;
  color: rgba(178, 178, 178, var(--tw-text-opacity));
}
a {
  color: white;
}
p {
  color: white;
}
.wrapper {
  margin-top: 80px;
  margin-bottom: 80px;
}
form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 1000px;
  margin: 0 auto 100px;
  padding: 45px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  p {
    color: black;
  }
}
</style>
