// lady: 5,7,9
const classesData = [
	{
		className:"11 Science",
		section:"Tiger",
		hostName:"Sebak Thapa",
		img:"mf.png",
		background:"./bg/bg1.jpg",
	},
	{
		className:"Chemistry",
		section:"Rhino",
		hostName:"Anita baral",
		img:"./profiles/pp5.jpg",
		background:"./bg/bg2.jpg",
	},
	{
		className:"Physics",
		section:"Rhino",
		hostName:"Ravi Sigdel",
		img:"./profiles/pp1.jpeg",
		background:"./bg/bg3.jpg",
	},
	{
		className:"Basic Maths",
		section:"Tiger",
		hostName:"Amrit Ghimire",
		img:"./profiles/pp2.jpg",
		background:"./bg/bg4.jpg",
	},
	{
		className:"Physics",
		section:"Elephant",
		hostName:"Karan Nath",
		img:"./profiles/pp3.jpg",
		background:"./bg/bg5.jpg",
	},
	{
		className:"Botany",
		section:"Rhino",
		hostName:"Ashika Bhushal",
		img:"./profiles/pp7.jpg",
		background:"./bg/bg1.jpg",
	},
	{
		className:"Basic Maths",
		section:"Rhino",
		hostName:"Som Raj Sapkota",
		img:"./profiles/pp4.jpg",
		background:"./bg/bg2.jpg",
	},
	{
		className:"Chemistry",
		section:"Tiger and Elephant",
		hostName:"Shaiesh Upadhaya",
		img:"./profiles/pp6.jpg",
		background:"./bg/bg3.jpg",
	},
	{
		className:"English",
		section:"Rhino",
		hostName:"Min Prasad Duwadi",
		img:"./profiles/pp8.jpg",
		background:"./bg/bg4.jpg",
	},
	{
		className:"English",
		section:"Rhino and Tiger",
		hostName:"Samundra Kattel",
		img:"./profiles/pp9.jpg",
		background:"./bg/bg5.jpg",
	},
	
	// {
	// 	className:"",
	// 	section:"",
	// 	hostName:"",
	// 	img:"",
	// },
];

const cardContainer = document.querySelector('.card-container');
const menuClasses = document.querySelector('.nav-left .enrolled ul');


//add Card And Give Data and Bg Color For It;
//also Add Enrolled Class Lists In Menu And give Bg Color
classesData.map((classData) =>{
	cardContainer.innerHTML += `<div class="card">
									<div class="top" style="background:url(${classData.background})">
										<div class="upper">
											<div class="texts">
												<div class="class-name">${classData.className}</div>
												<div class="section">${classData.section}</div>
											</div>
											<i class="fa fa-ellipsis-v menu"></i>
										</div>
										<div class="host-name">${classData.hostName}</div>
									</div>
									<div class="pic">
										<img src="${classData.img}" alt="">
									</div>
									<div class="bottom">
										<div class="icons">
											<i class="fa fa-id-badge"></i>
											<i class="far fa-folder"></i>
										</div>
									</div>
								</div>`;
	const icon = classData.className.charAt(0);
	menuClasses.innerHTML += 	`<li>
									<i class="icon" style="background:url(${classData.background})">${icon}</i>
									<span class="texts">
										<span class="class">${classData.className}</span>
										<span class="section">${classData.section}</span>
									</span>
								</li>`;
});

const navToggler = document.querySelector('nav.nav-bar .left .menu-icon');
const navLeft = document.querySelector('nav.nav-left');

navToggler.addEventListener('click',()=>{
	navLeft.classList.add('shown');
})
	const right = parseInt(window.getComputedStyle(navLeft).getPropertyValue('right'));
		const windowWidth = window.innerWidth;

document.body.addEventListener('click',(e)=>{
	const right = parseInt(window.getComputedStyle(navLeft).getPropertyValue('right'));
	const windowWidth = window.innerWidth;
	const navLeftWidth = parseInt(window.getComputedStyle(navLeft).getPropertyValue('width'));
		if(navLeftWidth < e.x){
			navLeft.classList.remove('shown');
		}
})


window.addEventListener('scroll',()=>{
	const scroll = window.scrollY;
	const navBar = document.querySelector('nav.nav-bar');

	if(scroll>0){
		navBar.style.boxShadow = '5px 0px 7px 2px rgba(0, 0, 0, .2)';
	}else{
		navBar.style.boxShadow = 'none';
	}
})
