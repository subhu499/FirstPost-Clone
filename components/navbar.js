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
              <img src="./images/user.png"></img>
              
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
