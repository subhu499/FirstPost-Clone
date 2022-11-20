export const navbar = `<div class="header-sticky">
<header>
    <div class="header-wrap container">
        <div class="hamburger-menu">
            <div class="sidenav-menu-btn" onclick="openNav()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="logo">
            <a href="index.html"><img width="157" height="45" alt="" src="https://www.firstpost.com/static/images/fp-desk-logo.png"></a>
        </div>
        <div class="social-div">
            <a href="https://www.facebook.com/firstpostin" rel="nofollow" target="_blank" title="">
                <svg width="30" height="30" viewBox="0 0 30 30">
    <g id="" data-name="Group 1199" transform="translate(-290 -78)">
      <rect id="" data-name="Rectangle 702" width="30" height="30" rx="15" transform="translate(290 78)"
        fill="#4968ab" />
      <path id="" data-name="Icon feather-facebook"
        d="M18,3H15.954a3.409,3.409,0,0,0-3.409,3.409V8.454H10.5v2.727h2.045v5.454h2.727V11.181h2.045L18,8.454H15.272V6.409a.682.682,0,0,1,.682-.682H18Z"
        transform="translate(290.563 83.333)" fill="#fff" />
    </g>
  </svg>
            </a>
            <a href="https://twitter.com/firstpost" rel="nofollow" target="_blank" title="">
                <svg width="30" height="30" viewBox="0 0 30 30">
    <g id="" data-name="Group 1200" transform="translate(-296 -132)">
      <rect id="" data-name="Rectangle 703" width="30" height="30" rx="15" transform="translate(296 132)"
        fill="#01b0ef" />
      <path id="" data-name="Icon feather-twitter"
        d="M15.839,4.491a7.1,7.1,0,0,1-2.047,1A2.92,2.92,0,0,0,8.67,7.444V8.1A6.948,6.948,0,0,1,2.8,5.143S.2,11.009,6.062,13.616A7.587,7.587,0,0,1,1.5,14.92c5.866,3.259,13.036,0,13.036-7.5a2.933,2.933,0,0,0-.052-.541A5.032,5.032,0,0,0,15.839,4.491Z"
        transform="translate(302.5 136.515)" fill="#fff" />
    </g>
  </svg>
            </a>
            <a href="https://www.instagram.com/firstpost/" rel="nofollow" target="_blank" title="">
                <svg version="1.1" width="30" height="30" id="Layer_1" x="0px" y="0px" viewBox="0 0 75.8 74.9" enable-background="new 0 0 75.8 74.9" xml:space="preserve">
    <g id="XMLID_1346_">
      <radialGradient id="XMLID_2_" cx="0.5832" cy="73.0792" r="132.6155" gradientUnits="userSpaceOnUse">
        <stop offset="0" style="stop-color:#F4EC55" />
        <stop offset="0.2412" style="stop-color:#E48242" />
        <stop offset="0.3463" style="stop-color:#D66863" />
        <stop offset="0.4422" style="stop-color:#CD4F74" />
        <stop offset="0.4888" style="stop-color:#C94379" />
        <stop offset="1" style="stop-color:#3F56A6" />
      </radialGradient>
      <path id="XMLID_1418_" fill="url(#XMLID_2_)" d="M38.2,72.8L38.2,72.8C18.4,72.8,2.4,56.8,2.4,37l0,0c0-19.8,16.1-35.9,35.9-35.9h0
C58,1.1,74.1,17.2,74.1,37l0,0C74.1,56.8,58,72.8,38.2,72.8z" />
      <g id="XMLID_1347_">
        <path id="XMLID_1352_" fill="#FFFFFF" d="M38.2,20.9c5.3,0,5.9,0,7.9,0.1c1.9,0.1,3,0.4,3.7,0.7c0.9,0.4,1.6,0.8,2.3,1.5
c0.7,0.7,1.1,1.3,1.5,2.3c0.3,0.7,0.6,1.7,0.7,3.7c0.1,2.1,0.1,2.7,0.1,7.9c0,5.3,0,5.9-0.1,7.9c-0.1,1.9-0.4,3-0.7,3.7
c-0.4,0.9-0.8,1.6-1.5,2.3c-0.7,0.7-1.3,1.1-2.3,1.5c-0.7,0.3-1.7,0.6-3.7,0.7c-2.1,0.1-2.7,0.1-7.9,0.1c-5.3,0-5.9,0-7.9-0.1
c-1.9-0.1-3-0.4-3.7-0.7c-0.9-0.4-1.6-0.8-2.3-1.5c-0.7-0.7-1.1-1.3-1.5-2.3c-0.3-0.7-0.6-1.7-0.7-3.7c-0.1-2.1-0.1-2.7-0.1-7.9
c0-5.3,0-5.9,0.1-7.9c0.1-1.9,0.4-3,0.7-3.7c0.4-0.9,0.8-1.6,1.5-2.3c0.7-0.7,1.3-1.1,2.3-1.5c0.7-0.3,1.7-0.6,3.7-0.7
C32.4,20.9,33,20.9,38.2,20.9 M38.2,17.3c-5.3,0-6,0-8.1,0.1c-2.1,0.1-3.5,0.4-4.8,0.9c-1.3,0.5-2.4,1.2-3.5,2.3
c-1.1,1.1-1.8,2.2-2.3,3.5c-0.5,1.3-0.8,2.7-0.9,4.8c-0.1,2.1-0.1,2.8-0.1,8.1s0,6,0.1,8.1c0.1,2.1,0.4,3.5,0.9,4.8
c0.5,1.3,1.2,2.4,2.3,3.5c1.1,1.1,2.2,1.8,3.5,2.3c1.3,0.5,2.7,0.8,4.8,0.9c2.1,0.1,2.8,0.1,8.1,0.1c5.3,0,6,0,8.1-0.1
c2.1-0.1,3.5-0.4,4.8-0.9c1.3-0.5,2.4-1.2,3.5-2.3c1.1-1.1,1.8-2.2,2.3-3.5c0.5-1.3,0.8-2.7,0.9-4.8c0.1-2.1,0.1-2.8,0.1-8.1
s0-6-0.1-8.1c-0.1-2.1-0.4-3.5-0.9-4.8c-0.5-1.3-1.2-2.4-2.3-3.5c-1.1-1.1-2.2-1.8-3.5-2.3c-1.3-0.5-2.7-0.8-4.8-0.9
C44.3,17.3,43.6,17.3,38.2,17.3" />
        <path id="XMLID_1349_" fill="#FFFFFF" d="M38.2,26.9c-5.6,0-10.1,4.5-10.1,10.1c0,5.6,4.5,10.1,10.1,10.1
c5.6,0,10.1-4.5,10.1-10.1C48.3,31.4,43.8,26.9,38.2,26.9 M38.2,43.5c-3.6,0-6.6-2.9-6.6-6.6c0-3.6,2.9-6.6,6.6-6.6
c3.6,0,6.6,2.9,6.6,6.6C44.8,40.6,41.9,43.5,38.2,43.5" />
        <path id="XMLID_1348_" fill="#FFFFFF" d="M51.1,26.5c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4
C50,24.1,51.1,25.2,51.1,26.5" />
      </g>
    </g>
  </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured" rel="nofollow" target="_blank" title="">
                <svg height="512" preserveAspectRatio="xMidYMid" viewBox="0 0 512 512" width="512">
    <circle style="fill: #fff;" cx="256" cy="256" r="256" />
    <path style="fill: #cd201f;fill-rule: evenodd;"
      d="M256.000,512.000 C114.615,512.000 0.000,397.385 0.000,256.000 C0.000,114.615 114.615,0.000 256.000,0.000 C397.385,0.000 512.000,114.615 512.000,256.000 C512.000,397.385 397.385,512.000 256.000,512.000 ZM372.201,157.479 C352.590,149.816 181.783,150.849 152.921,156.656 C124.058,162.463 115.000,175.541 115.000,255.439 C115.000,335.337 128.065,346.713 148.799,352.575 C169.533,358.437 333.046,358.178 366.431,353.398 C402.997,348.163 406.000,318.161 406.000,246.384 C406.000,174.607 393.866,165.945 372.201,157.479 ZM230.411,210.987 L307.901,252.146 L299.657,256.262 L230.411,210.987 ZM230.411,292.482 L230.411,213.456 L298.008,257.085 L230.411,292.482 Z" />
    <path style="fill-rule: evenodd;fill: #000; opacity: 0.1;"
      d="M436.999,75.012 C536.959,174.972 536.959,337.039 436.999,436.999 C337.039,536.959 174.972,536.959 75.012,436.999 " />
  </svg>
            </a>
            <a id="profileTag" href="login.html">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
    <path style="fill:#5A4146;" d="M255.999,7.842L255.999,7.842c-79.114,0-143.248,64.134-143.248,143.248v65.179h286.496V151.09
             C399.247,71.976,335.113,7.842,255.999,7.842z" />
    <path style="opacity:0.1;enable-background:new    ;"
      d="M255.999,7.842L255.999,7.842c-8.928,0-17.664,0.824-26.14,2.387
             c66.63,12.287,117.108,70.676,117.108,140.861v65.179h52.28V151.09C399.247,71.976,335.113,7.842,255.999,7.842z" />
    <g>
      <path style="fill:#E6B273;" d="M133.617,178.651c-19.429,0-35.18,15.751-35.18,35.18l0,0c0,19.429,15.751,35.18,35.18,35.18h17.108
               v-70.361L133.617,178.651L133.617,178.651z" />
      <path style="fill:#E6B273;" d="M378.382,178.651c19.429,0,35.18,15.751,35.18,35.18l0,0c0,19.429-15.751,35.18-35.18,35.18h-17.108
               v-70.361L378.382,178.651L378.382,178.651z" />
    </g>
    <path style="fill:#6AB2CC;" d="M425.233,504.158c-18.806-46.403-56.143-83.315-102.832-101.556l-0.738-0.28H190.336
             c-47.031,18.141-84.663,55.192-103.568,101.837L425.233,504.158L425.233,504.158z" />
    <path style="fill:#F0C087;"
      d="M293.232,393.955V327.86h-74.466v66.097c-9.786,2.031-19.287,4.839-28.431,8.366
             c7.938,28.82,34.32,49.996,65.664,49.996s57.726-21.176,65.664-49.996C312.519,398.794,303.018,395.987,293.232,393.955z" />
    <path style="opacity:0.1;enable-background:new    ;" d="M218.767,327.86v55.177c11.927,2.975,24.397,4.564,37.233,4.564
             s25.306-1.589,37.233-4.564V327.86H218.767z" />
    <path style="fill:#F0C087;"
      d="M344.214,121.172c-12.18,0-22.054-9.874-22.054-22.054c0,12.179-9.874,22.054-22.054,22.054
             c-12.18,0-22.054-9.874-22.054-22.054c0,12.179-9.874,22.054-22.054,22.054c-12.18,0-22.054-9.874-22.054-22.054
             c0,12.179-9.874,22.054-22.054,22.054c-12.18,0-22.054-9.874-22.054-22.054c0,12.179-9.874,22.054-22.054,22.054
             c-7.112,0-13.419-3.38-17.452-8.606c-10.684,17.258-16.857,37.602-16.857,59.391v61.751c0,67.668,54.857,122.525,122.525,122.525
             s122.525-54.857,122.525-122.525v-61.751c0-21.789-6.173-42.134-16.857-59.391C357.634,117.79,351.326,121.172,344.214,121.172z" />
    <path
      d="M219.677,273.891c-2.397,3.607-1.416,8.474,2.191,10.871c7.103,4.72,19.862,7.538,34.132,7.538
             c14.268,0,27.027-2.818,34.13-7.538c3.607-2.397,4.588-7.264,2.192-10.871c-2.397-3.607-7.263-4.588-10.871-2.192
             c-3.683,2.447-12.981,4.916-25.449,4.916c-12.47,0-21.767-2.47-25.45-4.917C226.943,269.304,222.075,270.283,219.677,273.891z" />
    <path d="M182.048,194.579c2.624-2.147,9.768-4.456,19.249-4.456c9.482,0,16.625,2.31,19.25,4.456
             c1.458,1.191,3.213,1.771,4.959,1.771c2.272,0,4.525-0.982,6.076-2.878c2.742-3.353,2.246-8.294-1.107-11.035
             c-6.125-5.008-17.033-7.999-29.178-7.999c-12.145,0-23.051,2.989-29.177,7.998c-3.353,2.742-3.849,7.682-1.107,11.035
             C173.754,196.823,178.695,197.32,182.048,194.579z" />
    <circle cx="201.3" cy="214.872" r="13.418" />
    <path
      d="M286.492,196.351c1.745,0,3.503-0.58,4.959-1.771c2.624-2.147,9.768-4.456,19.25-4.456c9.48,0,16.624,2.31,19.249,4.456
             c3.353,2.743,8.294,2.246,11.035-1.107c2.742-3.353,2.246-8.294-1.107-11.035c-6.125-5.008-17.033-7.998-29.177-7.998
             c-12.145,0-23.052,2.99-29.178,7.999c-3.353,2.742-3.849,7.682-1.107,11.035C281.967,195.369,284.22,196.351,286.492,196.351z" />
    <circle cx="310.701" cy="214.872" r="13.418" />
    <path d="M432.501,501.212c-10.92-26.946-28.238-51.452-50.079-70.866c-3.237-2.878-8.194-2.585-11.071,0.652
             c-2.878,3.237-2.586,8.193,0.651,11.071c17.091,15.192,31.164,33.777,41.151,54.246H98.845c3.927-8.054,8.493-15.835,13.639-23.234
             c2.473-3.556,1.595-8.443-1.961-10.915c-3.557-2.473-8.443-1.595-10.915,1.961c-8.076,11.612-14.841,24.091-20.108,37.087
             c-0.98,2.417-0.693,5.163,0.763,7.327c1.458,2.163,3.896,3.461,6.504,3.461h338.465c2.609,0,5.046-1.297,6.504-3.461
             C433.194,506.377,433.48,503.63,432.501,501.212z" />
    <path d="M127.618,256.427c8.119,46.007,40.445,83.766,83.306,99.611v31.648c-7.961,1.935-15.81,4.387-23.412,7.319
             c-25.422,9.806-48.951,25.373-68.043,45.016c-3.019,3.105-2.948,8.071,0.158,11.089c3.105,3.019,8.07,2.949,11.09-0.158
             c7.822-8.048,16.431-15.33,25.643-21.737c8.888-6.182,18.918-12.79,29.194-16.371c5.595,10.039,10.512,19.31,19.178,27.269
             c13.897,12.763,32.38,20.046,51.265,20.046c23.43,0,46.169-11.462,60.429-29.984c4.182-5.432,6.578-11.651,10.04-17.367
             c7.558,3.067,14.842,7.184,21.756,11.491c3.677,2.291,8.513,1.166,10.803-2.509c2.29-3.676,1.167-8.513-2.509-10.803
             c-9.932-6.187-20.45-11.466-31.337-15.72c0,0-0.693-0.262-0.704-0.267c0,0-0.035-0.013-0.043-0.016
             c-7.583-2.921-15.413-5.369-23.359-7.3v-31.648c42.862-15.844,75.187-53.604,83.306-99.611
             c20.892-2.929,37.024-20.909,37.024-42.595c0-12.676-5.538-24.101-14.315-31.988V151.09C407.089,67.778,339.311,0,256,0
             c-33.718,0-65.619,10.871-92.256,31.439c-3.429,2.647-4.061,7.572-1.415,11.001c2.649,3.427,7.573,4.061,11,1.415
             c23.867-18.43,52.454-28.171,82.671-28.171c74.663,0,135.406,60.742,135.406,135.406v21.726c-1.215-0.386-2.453-0.697-3.7-0.972
             c-0.104-0.023-1.339-0.248-1.339-0.293c-0.027-8.141-0.941-16.375-2.555-24.35c-1.657-8.185-4.306-16.182-7.628-23.835
             c-2.241-5.162-4.886-10.143-7.848-14.927c-1.309-2.115-3.695-3.572-6.264-3.704c-0.055-0.003-0.111,0.003-0.166,0.002
             c-2.505-0.069-4.907,1.046-6.446,3.039c-2.725,3.531-6.824,5.556-11.244,5.556c-7.837,0-14.212-6.375-14.212-14.212
             c0-4.331-3.511-7.842-7.842-7.842s-7.842,3.511-7.842,7.842c0,7.837-6.376,14.212-14.212,14.212s-14.212-6.375-14.212-14.212
             c0-4.331-3.511-7.842-7.842-7.842c-4.331,0-7.842,3.511-7.842,7.842c0,7.837-6.375,14.212-14.212,14.212
             s-14.212-6.375-14.212-14.212c0-4.331-3.511-7.842-7.842-7.842c-4.331,0-7.842,3.511-7.842,7.842
             c0,7.837-6.375,14.212-14.212,14.212c-7.837,0-14.212-6.375-14.212-14.212c0-4.331-3.511-7.842-7.842-7.842
             c-4.331,0-7.842,3.511-7.842,7.842c0,7.837-6.375,14.212-14.212,14.212c-4.421,0-8.52-2.025-11.244-5.556
             c-1.536-1.991-3.93-3.105-6.438-3.039c-0.059,0.001-0.115-0.005-0.175-0.002c-2.54,0.124-4.928,1.545-6.264,3.704
             c-8.82,14.245-14.733,30.4-16.902,47.027c-0.611,4.681-0.993,9.36-1.087,14.08c-0.014,0.668-0.039,1.336-0.041,2.005
             c-0.015,0.084-1.262,0.276-1.339,0.293c-1.247,0.275-2.485,0.587-3.7,0.972V151.09c0-31.714,11.196-62.557,31.526-86.847
             c2.779-3.322,2.341-8.268-0.981-11.047c-3.32-2.779-8.267-2.341-11.047,0.981c-22.688,27.107-35.182,61.524-35.182,96.913v30.754
             c-8.778,7.887-14.315,19.312-14.315,31.988C90.594,235.518,106.726,253.498,127.618,256.427z M125.785,240.028
             c-11.27-3.376-19.507-13.842-19.507-26.196c0-9.189,4.577-17.346,11.569-22.307c0.054-0.039,0.11-0.073,0.164-0.111
             c2.287-1.597,4.827-2.848,7.489-3.679c0.044-0.014,0.089-0.024,0.132-0.038v46.01c0,1.618,0.04,3.233,0.099,4.848
             C125.75,239.046,125.761,239.536,125.785,240.028z M285.39,360.739v33.218c0,3.717,2.609,6.923,6.249,7.679
             c6.802,1.412,13.543,3.238,20.121,5.45c-0.019,0.045-0.034,0.091-0.053,0.136c-3.46,8.369-8.834,15.993-15.647,21.966
             c-11.032,9.673-25.353,15.289-40.059,15.289c-9.537,0-18.979-2.349-27.474-6.665c-12.672-6.436-22.899-17.586-28.285-30.727
             c6.579-2.211,13.319-4.038,20.121-5.45c3.639-0.756,6.249-3.962,6.249-7.679v-33.218c0.729,0.168,1.462,0.318,2.194,0.473
             c8.927,1.896,18.071,2.862,27.197,2.862C265.864,364.073,275.777,362.957,285.39,360.739z M386.214,240.028
             c0.024-0.49,0.036-0.981,0.053-1.472c0.06-1.617,0.099-3.231,0.099-4.848v-46.011c0.044,0.014,0.089,0.024,0.132,0.038
             c2.659,0.83,5.205,2.084,7.489,3.679c0.054,0.038,0.11,0.073,0.164,0.111c6.993,4.96,11.569,13.118,11.569,22.307
             C405.721,226.186,397.483,236.652,386.214,240.028z M167.784,129.014c8.722,0,16.583-3.755,22.054-9.732
             c5.47,5.978,13.331,9.732,22.054,9.732s16.583-3.754,22.054-9.732c5.47,5.978,13.331,9.732,22.054,9.732
             c8.722,0,16.583-3.754,22.054-9.732c5.47,5.978,13.331,9.732,22.054,9.732s16.584-3.755,22.054-9.732
             c5.47,5.978,13.331,9.732,22.054,9.732c5.5,0,10.757-1.48,15.318-4.216c1.372,2.731,2.621,5.518,3.746,8.351
             c4.874,12.277,7.404,25.432,7.404,38.807v6.699v55.052c0,4.536-0.274,9.072-0.807,13.576c-5.427,45.801-37.948,83.41-81.045,96.31
             c-10.623,3.169-21.744,4.796-32.832,4.796c-11.132,0-22.17-1.606-32.832-4.796c-43.096-12.9-75.617-50.509-81.045-96.31
             c-0.533-4.503-0.807-9.04-0.807-13.576v-55.052v-6.699c0-13.374,2.53-26.529,7.404-38.807c1.125-2.834,2.375-5.62,3.746-8.351
             C157.028,127.534,162.285,129.014,167.784,129.014z" />
  </svg>

            </a>
        </div>
        <div id="mySEARCH" class="search-box">
            <div class="input-wrap">
                <input autocomplete="off" type="text" name="search" class="search" placeholder="search">
            </div>
            <div class="search-btn" onclick="searchClickHandler()">
                <svg viewBox="0 0 512 512" class="close" fill="#fff">
    <path
      d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0" />
    <path
      d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0" />
    <path
      d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0" />
  </svg>
                <svg version="1.1" id="" x="0px" y="0px" viewBox="0 0 511.999 511.999" xml:space="preserve" fill="#fff" class="open">
    <path
      d="M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667
      S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732
      c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667
      c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z" />
  </svg>
            </div>
            <div class="search-suggestions"></div>
        </div>
    </div>
</header>

<nav class="main-menu-wrap">
    <div class="menu-wrap container">
        <ul class="main-menu">
            <li class="nav-events ">
                <a href="india.html" title="India" class="">India</a>
            </li>

            <li class="nav-events ">
                <a href="world.html" title="World" class="">World</a>
            </li>

            <li class="nav-events ">
                <a href="politics.html" title="Politics" class="">Politics</a>
            </li>

            <li class="nav-events ">
                <a href="auto.html" title="Auto" class="">Auto</a>
            </li>

            <li class="nav-events ">
                <a href="opinion.html" title="Opinion" class="">Opinion</a>
            </li>

            <li class="nav-events ">
                <a href="sports.html" title="Sports" class="">Sports</a>
            </li>

            <li class="nav-events ">
                <a href="explainers.html" title="Explainers" class="">Explainers</a>
            </li>

            <li class="nav-events ">
                <a href="cricket.html" title="Cricket" class="">Cricket</a>
            </li>

            <li class="nav-events ">
                <a href="entertainment.html" title="Entertainment" class="">Entertainment</a>
            </li>

            <li class="nav-events ">
                <a href="https://www.firstpost.com/tech/" title="Tech" class="">Tech</a>
            </li>
            <li class="nav-events ">
            <a href="netrasuraksha.html" title="netrasuraksha" class="">
            <img src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg" alt="netrasuraksha" title="netrasuraksha" width="103" height="25">
            </a>
            </li>
        </ul>
    </div>
</nav>
</div>
<div id="sidenav-wrap" onclick="closeNav()">
<div id="mySidenav" onclick="event.stopPropagation();">
    <div onclick="closeNav()" class="close-sidenav">
        <svg viewBox="0 0 512 512" class="close" fill="#C7C7C7">
<path
  d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844 256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0" />
<path
  d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c-7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 5.359375zm0 0" />
<path
  d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531-18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 5.359375zm0 0" />
</svg>
    </div>

    <div class="tab-container">
        <div class="tab">

            <div class="tablinks active" onclick="tabs(this, 'section')">

                <svg id="Capa_1" enable-background="new 0 0 467.765 467.765" height="16" width="16" viewBox="0 0 467.765 467.765">
    <path id="path-1_82_" d="m175.412 146.176h292.353v58.471h-292.353z" transform="translate(6 5)" />
    <path id="path-1_81_" d="m175.412 263.118h292.353v58.471h-292.353z" transform="translate(6 9)" />
    <path id="path-2_14_" d="m0 380.059h467.765v58.471h-467.765z" transform="translate(0 13)" />
    <path id="path-2_13_" d="m0 29.235h467.765v58.471h-467.765z" transform="translate(0 1)" />
    <path d="m0 350.824v-233.883l116.941 116.941z" />
  </svg> Sections
            </div>

            <div class="tablinks " onclick="tabs(this, 'more')">

                <svg enable-background="new 0 0 561 561" version="1.1" height="16" width="16" viewBox="0 0 561 561" xml:space="preserve">
    <path
      d="m395.25 0h-306c-28.05 0-51 22.95-51 51v357h51v-357h306v-51zm76.5 102h-280.5c-28.05 0-51 22.95-51 51v357c0 28.05 22.95 51 51 51h280.5c28.05 0 51-22.95 51-51v-357c0-28.05-22.95-51-51-51zm0 408h-280.5v-357h280.5v357z">
    </path>
  </svg> More
            </div>

            <div class="tablinks " onclick="tabs(this, 'shows')">

                <svg enable-background="new 0 0 512 512" version="1.1" height="16" width="16" viewBox="0 0 512 512" xml:space="preserve">
    <path
      d="m495.04 40.803h-478.08c-9.261 0-16.961 7.509-16.961 16.77v318.99c0 9.261 7.7 16.382 16.961 16.382h178.67v44.716h-71.227c-9.261 0-16.769 7.508-16.769 16.769s7.508 16.769 16.769 16.769h263.19c9.261 0 16.769-7.508 16.769-16.769s-7.508-16.769-16.769-16.769h-71.227v-44.716h178.67c9.261 0 16.961-7.121 16.961-16.382v-318.99c0-9.261-7.7-16.77-16.961-16.77zm-212.21 396.86h-53.66v-33.537h53.659v33.537zm195.63-78.253h-444.93v-285.06h444.93v285.06z">
    </path>
  </svg> Shows
            </div>

            <div class="tablinks " onclick="tabs(this, 'f-brands')">

                <svg width="16" height="13.667" viewBox="0 0 16 13.667">rn <path id="Icon_material-web"
      data-name="Icon material-web"
      d="M17.4,6H4.6A1.655,1.655,0,0,0,3.008,7.708L3,17.958a1.662,1.662,0,0,0,1.6,1.708H17.4A1.662,1.662,0,0,0,19,17.958V7.708A1.662,1.662,0,0,0,17.4,6Zm-4,11.958H4.6V14.542h8.8Zm0-4.271H4.6V10.271h8.8Zm4,4.271H14.2V10.271h3.2Z"
      transform="translate(-3 -6)" fill="#b9b9b9"></path>rn</svg> F.Brands
            </div>

        </div>

        <div id="more" class="tabcontent">
            <ul class="menu-list">

                <li class="hamburger-events"><a href="coronavirus.html" title="Coronavirus Outbreak">
      Coronavirus Outbreak </a></li>

                <li class="hamburger-events"><a href="board-results.html" title="Board Exam Results 2022">
      Board Exam Results 2022 </a></li>

                <li class="hamburger-events"><a href="coronavirus.html" title="India Positive In Coronavirus"> India
      Positive In Coronavirus </a></li>

                <li class="hamburger-events"><a href="manjul-toons.html" title="Manjul Toons"> Manjul Toons
    </a></li>

                <li class="hamburger-events"><a href="https://www.moneycontrol.com/promos/pro.php?utm_source=firstpost-header&amp;utm_medium=referral&amp;utm_campaign=Pro365" title="FREEDOM365" target="_blank"> FREEDOM365 </a></li>

            </ul>
        </div>

        <div id="shows" class="tabcontent">
            <ul class="menu-list">

                <li class="hamburger-events"><a href="#" title="Firstpost Conversations"> Firstpost
      Conversations </a></li>

                <li class="hamburger-events"><a href="#" title="9 Months S.5"> 9 Months
      S.5 </a></li>

                <li class="hamburger-events"><a href="#" title="Vanity Diaries">
      Vanity Diaries </a></li>

                <li class="hamburger-events"><a href="#" title="Poetry Project">
      Poetry Project </a></li>

                <li class="hamburger-events"><a href="#" title="Social Media Star"> Social Media Star </a>
                </li>

                <li class="hamburger-events"><a href="#" title="F. Originals"> F. Originals </a></li>

                <li class="hamburger-events"><a href="#" title="Its a wrap"> Its a wrap
    </a></li>

                <li class="hamburger-events"><a href="#" title="Firstpost Salon">
      Firstpost Salon </a></li>

                <li class="hamburger-events"><a href="#" title="Firstday First Showsha"> Firstday First
      Showsha </a></li>

                <li class="hamburger-events"><a href="#" title="India Ka Fashion Capital"> India Ka Fashion
      Capital </a></li>

                <li class="hamburger-events"><a href="#" title="Firstpost Ground Report"> Firstpost Ground
      Report </a></li>

                <li class="hamburger-events"><a href="#" title="Our Better World">
      Our Better World </a></li>

                <li class="hamburger-events"><a href="#" title="Web Talkies"> Web
      Talkies </a></li>

                <li class="hamburger-events"><a href="#" title="Bowled Over"> Bowled Over </a></li>

                <li class="hamburger-events"><a href="#" title="What the Duck"> What the Duck </a></li>

                <li class="hamburger-events"><a href="#" title="101 India"> 101 India
    </a></li>

                <li class="hamburger-events"><a href="#" title="Patio Unplugged">
      Patio Unplugged </a></li>

            </ul>
        </div>

        <div id="f-brands" class="tabcontent">
            <ul class="menu-list">
                <li class="hamburger-events"><a href="#" title="#VOLVO"> #VOLVO </a></li>

                <li class="hamburger-events"><a href="#" title="Crypto"> Crypto </a>
                </li>

                <li class="hamburger-events"><a href="#" title="Asia Cup 2022"> Asia Cup 2022 </a></li>

                <li class="hamburger-events"><a href="#" title="Assembly Election 2022"> Assembly Election
      2022 </a></li>

            </ul>
        </div>

        <div id="section" class="tabcontent" style="display: block;">
            <ul class="menu-list">

                <li class="hamburger-events"><a href="index.html" title="Home"> Home </a></li>

                <li class="hamburger-events"><a href="health.html" title="Health"> Health </a></li>

                <li class="hamburger-events"><a href="india.html" title="India"> India </a></li>

                <li class="hamburger-events"><a href="world.html" title="World"> World </a></li>

                <li class="hamburger-events"><a href="politics.html" title="Politics"> Politics
    </a></li>

                <li class="hamburger-events"><a href="artandculture.html" title="Arts &amp; Culture"> Arts
      &amp; Culture </a></li>

                <li class="hamburger-events"><a href="auto.html" title="Auto"> Auto </a></li>

                <li class="hamburger-events"><a href="opinion.html" title="Opinion"> Opinion </a>
                </li>

                <li class="hamburger-events"><a href="sports.html" title="Sports"> Sports </a></li>

                <li class="hamburger-events"><a href="explainers.html" title="Explainers">
      Explainers </a></li>

                <li class="hamburger-events"><a href="cricket.html" title="Cricket"> Cricket </a></li>

                <li class="hamburger-events"><a href="entertainment.html" title="Entertainment">
      Entertainment </a></li>

                <li class="hamburger-events"><a href="https://www.firstpost.com/tech/" title="Tech"> Tech </a></li>

                <li class="hamburger-events"><a href="photos.html" title="Photos"> Photos </a></li>

                <li class="hamburger-events"><a href="videos.html" title="Videos"> Videos </a></li>

                <li class="hamburger-events"><a href="international.html" title="International">
      International </a></li>

                <li class="hamburger-events"><a href="business.html" title="Business"> Business
    </a></li>



            </ul>
        </div>


    </div>

    <ul class="horizontal-share">
        <li>
            <a href="https://www.facebook.com/firstpostin" rel="nofollow" target="_blank" class="fb sc-icon">
                <svg width="30" height="30" viewBox="0 0 30 30">
    <g id="" data-name="Group 1199" transform="translate(-290 -78)">
      <rect id="" data-name="Rectangle 702" width="30" height="30" rx="15" transform="translate(290 78)"
        fill="#4968ab" />
      <path id="" data-name="Icon feather-facebook"
        d="M18,3H15.954a3.409,3.409,0,0,0-3.409,3.409V8.454H10.5v2.727h2.045v5.454h2.727V11.181h2.045L18,8.454H15.272V6.409a.682.682,0,0,1,.682-.682H18Z"
        transform="translate(290.563 83.333)" fill="#fff" />
    </g>
  </svg>
            </a>
        </li>
        <li>
            <a href="https://twitter.com/firstpost" rel="nofollow" target="_blank" class="tw sc-icon">
                <svg width="30" height="30" viewBox="0 0 30 30">
    <g id="" data-name="Group 1200" transform="translate(-296 -132)">
      <rect id="" data-name="Rectangle 703" width="30" height="30" rx="15" transform="translate(296 132)"
        fill="#01b0ef" />
      <path id="" data-name="Icon feather-twitter"
        d="M15.839,4.491a7.1,7.1,0,0,1-2.047,1A2.92,2.92,0,0,0,8.67,7.444V8.1A6.948,6.948,0,0,1,2.8,5.143S.2,11.009,6.062,13.616A7.587,7.587,0,0,1,1.5,14.92c5.866,3.259,13.036,0,13.036-7.5a2.933,2.933,0,0,0-.052-.541A5.032,5.032,0,0,0,15.839,4.491Z"
        transform="translate(302.5 136.515)" fill="#fff" />
    </g>
  </svg>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/firstpost/" rel="nofollow" target="_blank" class="in sc-icon">
                <svg version="1.1" width="30" height="30" id="Layer_1" x="0px" y="0px" viewBox="0 0 75.8 74.9" enable-background="new 0 0 75.8 74.9" xml:space="preserve">
    <g id="XMLID_1346_">
      <radialGradient id="XMLID_2_" cx="0.5832" cy="73.0792" r="132.6155" gradientUnits="userSpaceOnUse">
        <stop offset="0" style="stop-color:#F4EC55" />
        <stop offset="0.2412" style="stop-color:#E48242" />
        <stop offset="0.3463" style="stop-color:#D66863" />
        <stop offset="0.4422" style="stop-color:#CD4F74" />
        <stop offset="0.4888" style="stop-color:#C94379" />
        <stop offset="1" style="stop-color:#3F56A6" />
      </radialGradient>
      <path id="XMLID_1418_" fill="url(#XMLID_2_)" d="M38.2,72.8L38.2,72.8C18.4,72.8,2.4,56.8,2.4,37l0,0c0-19.8,16.1-35.9,35.9-35.9h0
C58,1.1,74.1,17.2,74.1,37l0,0C74.1,56.8,58,72.8,38.2,72.8z" />
      <g id="XMLID_1347_">
        <path id="XMLID_1352_" fill="#FFFFFF" d="M38.2,20.9c5.3,0,5.9,0,7.9,0.1c1.9,0.1,3,0.4,3.7,0.7c0.9,0.4,1.6,0.8,2.3,1.5
c0.7,0.7,1.1,1.3,1.5,2.3c0.3,0.7,0.6,1.7,0.7,3.7c0.1,2.1,0.1,2.7,0.1,7.9c0,5.3,0,5.9-0.1,7.9c-0.1,1.9-0.4,3-0.7,3.7
c-0.4,0.9-0.8,1.6-1.5,2.3c-0.7,0.7-1.3,1.1-2.3,1.5c-0.7,0.3-1.7,0.6-3.7,0.7c-2.1,0.1-2.7,0.1-7.9,0.1c-5.3,0-5.9,0-7.9-0.1
c-1.9-0.1-3-0.4-3.7-0.7c-0.9-0.4-1.6-0.8-2.3-1.5c-0.7-0.7-1.1-1.3-1.5-2.3c-0.3-0.7-0.6-1.7-0.7-3.7c-0.1-2.1-0.1-2.7-0.1-7.9
c0-5.3,0-5.9,0.1-7.9c0.1-1.9,0.4-3,0.7-3.7c0.4-0.9,0.8-1.6,1.5-2.3c0.7-0.7,1.3-1.1,2.3-1.5c0.7-0.3,1.7-0.6,3.7-0.7
C32.4,20.9,33,20.9,38.2,20.9 M38.2,17.3c-5.3,0-6,0-8.1,0.1c-2.1,0.1-3.5,0.4-4.8,0.9c-1.3,0.5-2.4,1.2-3.5,2.3
c-1.1,1.1-1.8,2.2-2.3,3.5c-0.5,1.3-0.8,2.7-0.9,4.8c-0.1,2.1-0.1,2.8-0.1,8.1s0,6,0.1,8.1c0.1,2.1,0.4,3.5,0.9,4.8
c0.5,1.3,1.2,2.4,2.3,3.5c1.1,1.1,2.2,1.8,3.5,2.3c1.3,0.5,2.7,0.8,4.8,0.9c2.1,0.1,2.8,0.1,8.1,0.1c5.3,0,6,0,8.1-0.1
c2.1-0.1,3.5-0.4,4.8-0.9c1.3-0.5,2.4-1.2,3.5-2.3c1.1-1.1,1.8-2.2,2.3-3.5c0.5-1.3,0.8-2.7,0.9-4.8c0.1-2.1,0.1-2.8,0.1-8.1
s0-6-0.1-8.1c-0.1-2.1-0.4-3.5-0.9-4.8c-0.5-1.3-1.2-2.4-2.3-3.5c-1.1-1.1-2.2-1.8-3.5-2.3c-1.3-0.5-2.7-0.8-4.8-0.9
C44.3,17.3,43.6,17.3,38.2,17.3" />
        <path id="XMLID_1349_" fill="#FFFFFF" d="M38.2,26.9c-5.6,0-10.1,4.5-10.1,10.1c0,5.6,4.5,10.1,10.1,10.1
c5.6,0,10.1-4.5,10.1-10.1C48.3,31.4,43.8,26.9,38.2,26.9 M38.2,43.5c-3.6,0-6.6-2.9-6.6-6.6c0-3.6,2.9-6.6,6.6-6.6
c3.6,0,6.6,2.9,6.6,6.6C44.8,40.6,41.9,43.5,38.2,43.5" />
        <path id="XMLID_1348_" fill="#FFFFFF" d="M51.1,26.5c0,1.3-1.1,2.4-2.4,2.4c-1.3,0-2.4-1.1-2.4-2.4c0-1.3,1.1-2.4,2.4-2.4
C50,24.1,51.1,25.2,51.1,26.5" />
      </g>
    </g>
  </svg>
            </a>
        </li>
        <li>
            <a href="https://www.youtube.com/channel/UCz8QaiQxApLq8sLNcszYyJw/featured" rel="nofollow" target="_blank" class="yu sc-icon">
                <svg height="30" preserveAspectRatio="xMidYMid" viewBox="0 0 512 512" width="30">
    <circle style="fill: #fff;" cx="256" cy="256" r="256" />
    <path style="fill: #cd201f;fill-rule: evenodd;"
      d="M256.000,512.000 C114.615,512.000 0.000,397.385 0.000,256.000 C0.000,114.615 114.615,0.000 256.000,0.000 C397.385,0.000 512.000,114.615 512.000,256.000 C512.000,397.385 397.385,512.000 256.000,512.000 ZM372.201,157.479 C352.590,149.816 181.783,150.849 152.921,156.656 C124.058,162.463 115.000,175.541 115.000,255.439 C115.000,335.337 128.065,346.713 148.799,352.575 C169.533,358.437 333.046,358.178 366.431,353.398 C402.997,348.163 406.000,318.161 406.000,246.384 C406.000,174.607 393.866,165.945 372.201,157.479 ZM230.411,210.987 L307.901,252.146 L299.657,256.262 L230.411,210.987 ZM230.411,292.482 L230.411,213.456 L298.008,257.085 L230.411,292.482 Z" />
    <path style="fill-rule: evenodd;fill: #000; opacity: 0.1;"
      d="M436.999,75.012 C536.959,174.972 536.959,337.039 436.999,436.999 C337.039,536.959 174.972,536.959 75.012,436.999 " />
  </svg>
            </a>
        </li>
    </ul>
</div>
</div>`;