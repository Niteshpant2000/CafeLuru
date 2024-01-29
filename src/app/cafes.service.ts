import { Injectable } from '@angular/core';
import {Cafe} from './Cafe';
@Injectable({
  providedIn: 'root'
})
export class CafesService {
  cafeArr:Cafe[]=[
    {cafeID:101,name:"Cafe Nosh",description:"The Nosh House is all about slowing down for just a little bit. We’ve all been a part of the race for too long. Made peace with the monotony that seems to be a part of it. So, we decided to give you something fresh, something new every day.",avg_cost:200,menu:["../../assets/menu1_cafenosh.webp","../../assets/menu2_cafenosh.webp"],banner:"../../assets/cafe_banner1.jpg"},
    {cafeID:102,name:"The Hole in the wall cafe",description:"We offer a homely, no-frills ambience and dine-in experience that is built on trust and passion. Pet-friendly Cafe, sale of homemade ingredients through their sister brand “Chutney Marise”.",avg_cost:350,menu:["../../assets/menu1_holeinwall.webp","../../assets/menu2_holeinwall.webp","../../assets/menu3_holeinwall.webp","../../assets/menu4_holeinwall.webp","../../assets/menu5_holeinwall.webp","../../assets/menu6_holeinwall.webp","../../assets/menu7_holeinwall.webp","../../assets/menu8_holeinwall.webp"],banner:"../../assets/cafe_banner2.jpg"},
    {cafeID:103,name:"Matteo Coffea",description:"The cafe is one of the oldest cafe in Bangalore and was opened during the British era. The food is awesome over here and the ambiance is neatly put up. Good place to spend some time with your loved ones or quick catch up with friends.",avg_cost:350,menu:["../../assets/menu1_matteo.webp","../../assets/menu2_matteo.webp","../../assets/menu3_matteo.webp","../../assets/menu4_matteo.webp","../../assets/menu5_matteo.webp","../../assets/menu6_matteo.webp"],banner:"../../assets/cafe_banner3.jfif"},
    {cafeID:104,name:"Dr Sheesha",description:"Dr Sheesha as name tells it's a famous Sheesha place in JP Nagar with good roof top ambience.They have wide options in vegetarian food with good quality and quantity which includes pizza ,pasta, soups , starters , biryani ,mocktails, shakes and more.",avg_cost:500,menu:["../../assets/menu1_drsheesha.webp","../../assets/menu2_drsheesha.webp","../../assets/menu3_drsheesha.webp","../../assets/menu4_drsheesha.webp"],banner:"../../assets/cafe_banner4.jpg"},
    {cafeID:105,name:"Marzipan Café and Bakery",description:"Marzipan Cafe And Bakery aces with their Greek Moussaka and stellar desserts. Plus, the owner and Greek expat Kiki Petriti is genuinely friendly and polite..",avg_cost:500,menu:["../../assets/menu1_marzipan.avif","../../assets/menu2_marzipan.avif","../../assets/menu3_marzipan.webp"],banner:"../../assets/cafe_banner5.jpg"},
    {cafeID:106,name:"Little Green Café",description:"As the name suggests, thus cafe is 'Little' in its area but is effectively utilised with decor and seating.It is 'Green' in a way that it promotes healthy food, green veggies and also serves vegan and Jain food.",avg_cost:450,menu:["../../assets/menu1_littlegreencafe.webp","../../assets/menu2_littlegreencafe.webp","../../assets/menu3_littlegreencafe.webp","../../assets/menu4_littlegreencafe.webp"],banner:"../../assets/cafe_banner6.jpg"},
    {cafeID:107,name:"154 Breakfast Club",description:"154 Breakfast Club - A community for startups, adventurers, students, entrepreneurs, and dreamers! All-Day Breakfast, Lunch & Dinner without burning a hole in your pocket!.",avg_cost:550,menu:["../../assets/menu1_breakfastclub.avif","../../assets/menu2_breakfastclub.avif","../../assets/menu3_breakfastclub.avif","../../assets/menu4_breakfastclub.avif","../../assets/menu5_breakfastclub.avif","../../assets/menu6_breakfastclub.avif","../../assets/menu7_breakfastclub.avif"],banner:"../../assets/cafe_banner7.jpg"},
    {cafeID:108,name:"Glen’s Bakehouse",description:"Glen's Bakehouse in Indiranagar is a quaint and charming cafe that offers a warm and inviting atmosphere. The menu features a range of baked goods, from freshly baked bread to delicious pastries, all made using the finest ingredients.",avg_cost:200,menu:["../../assets/menu1_glensbakehouse.avif","../../assets/menu2_glensbakehouse.avif","../../assets/menu3_glensbakehouse.avif","../../assets/menu4_glensbakehouse.avif","../../assets/menu5_glensbakehouse.webp","../../assets/menu6_glensbakehouse.avif","../../assets/menu7_glensbakehouse.avif","../../assets/menu8_glensbakehouse.avif"],banner:"../../assets/cafe_banner8.jpg"},
    {cafeID:109,name:"Dyu Art Café",description:"Cafe & gallery serving global dishes in a calm, rustic space with wood paneling & colourful artwork.",avg_cost:400,menu:["../../assets/menu1_dyuartcafe.webp","../../assets/menu2_dyuartcafe.webp","../../assets/menu3_dyuartcafe.webp","../../assets/menu4_dyuartcafe.avif","../../assets/menu5_dyuartcafe.avif","../../assets/menu6_dyuartcafe.avif","../../assets/menu7_dyuartcafe.avif","../../assets/menu8_dyuartcafe.avif"],banner:"../../assets/cafe_banner9.jpg"},
    {cafeID:110,name:"The Only Place",description:"Straightforward mainstay serving American classics such as burgers, steaks, sandwiches & apple pie.",avg_cost:700,menu:["../../assets/menu1_theonlyplace.avif","../../assets/menu2_theonlyplace.avif","../../assets/menu3_theonlyplace.avif","../../assets/menu4_theonlyplace.avif","../../assets/menu5_theonlyplace.avif","../../assets/menu6_theonlyplace.avif","../../assets/menu7_theonlyplace.avif","../../assets/menu8_theonlyplace.avif"] ,banner:"../../assets/res_banner1.jpg"}, 
    {cafeID:111,name:"Truffles",description:"At truffles, we follow a simple mantra - 'Strive for continuous improvement and make no compromise on quality!'",avg_cost:550,menu:["../../assets/menu1_truffles.avif","../../assets/menu2_truffles.avif","../../assets/menu3_truffles.avif","../../assets/menu4_truffles.avif","../../assets/menu5_truffles.avif","../../assets/menu6_truffles.avif","../../assets/menu7_truffles.avif","../../assets/menu8_truffles.avif"] ,banner:"../../assets/res_banner2.jpg"}, 
    {cafeID:112,name:"Treat",description:"This casual dining is the perfect destination for tantalizing North Indian and Mughlai food in the area. The place has a modern and attractive ambiance.",avg_cost:420,menu:["../../assets/menu1_treat.webp","../../assets/menu2_treat.avif","../../assets/menu3_treat.avif","../../assets/menu4_treat.avif","../../assets/menu5_treat.avif","../../assets/menu6_treat.avif","../../assets/menu7_treat.avif","../../assets/menu8_treat.avif"] ,banner:"../../assets/res_banner3.jpg"}, 
    {cafeID:113,name:"Koshy's",description:"Koshy's is a F&B-Casual Dining restaurant that offers a wide variety of delicious food and drinks. The restaurant has a warm and inviting atmosphere, with a friendly and attentive staff.",avg_cost:380,menu:["../../assets/menu1_koshys.avif","../../assets/menu2_koshys.avif","../../assets/menu3_koshys.avif","../../assets/menu4_koshys.avif","../../assets/menu5_koshys.avif"] ,banner:"../../assets/res_banner4.jpg"}, 
    {cafeID:114,name:"Mavalli",description:"A legendary name in South Indian comfort food, this super-popular eatery has had Bengaluru eating out of its hands since 1924.",avg_cost:120,menu:["../../assets/menu1_mavalli.avif"] ,banner:"../../assets/res_banner6.jpg"}, 
    {cafeID:115,name:"Shri Sagar CTR",description:"This place has been around for more than 25 years and has seen many celebrations. It is one of the frequent spots for a quick lunch on a rush day. Breakfast is served here as early as 7am.",avg_cost:75,menu:["../../assets/menu1_shrisafar.avif"],banner:"../../assets/res_banner7.jpg" }, 
    {cafeID:116,name:"Nagaarjuna",description:"Nagarjuna is a fine dining outlet located in the heart of the city. It offers a unique dining experience with its exquisite ambience and delectable cuisine.",avg_cost:425,menu:["../../assets/menu1_nagarjuna.avif"],banner:"../../assets/res_banner8.jpg" }, 
    {cafeID:117,name:"Toit Restaurant",description:"Brick-walled microbrewery offering naturally crafted beers, hearty pub grub & brewery tours.",avg_cost:700,menu:["../../assets/menu1_toit","../../assets/menu2_toit","../../assets/menu3_toit","../../assets/menu4_toit.avif","../../assets/menu5_toit.avif","../../assets/menu6_toit.avif","../../assets/menu7_toit.avif","../../assets/menu8_toit.avif"],banner:"../../assets/res_banner5.jpg" }, 
    {cafeID:118,name:"The Humming Tree",description:"The Humming Tree is a music venue & bar for music lovers in Bangalore, India. Open since June 2013, we aim to be a fun and friendly place to have interesting and healthy food, wicked drinks and congenial thoughts in an authentic environment during the day and a diverse music venue with extra-ordinary sound at night.",avg_cost:400,menu:["../../assets/menu1_humming.webp","../../assets/menu2_humming.webp","../../assets/menu3_humming.webp","../../assets/menu4_humming.webp","../../assets/menu5_humming.webp","../../assets/menu6_humming.webp","../../assets/menu7_humming.webp","../../assets/menu8_humming.webp"],banner:"../../assets/res_banner9.jpg" }, 

  ] 
  static id:number=101;
  constructor() { }
  setSomething(id1:number){
    CafesService.id=id1;
  }
  getID(){
    return CafesService.id;
  }
}