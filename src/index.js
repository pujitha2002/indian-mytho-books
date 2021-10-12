import React from "react";
import ReactDOM from "react-dom";
import './index.css';
const books=[
  {
  title:'Draupadi - India\'s First Daughter ',
  author:'Vamshi Krishna',
  img:'https://m.media-amazon.com/images/I/41sLCnW2+DL.jpg',
  page:'https://www.amazon.in/Draupadi-Indias-Daughter-Vamshi-Krishna-ebook/dp/B087J7VZZM',
   },
    {
  title:'Mahabharata Indian Epic ',
  author:'sunita bansal',
  img:'https://m.media-amazon.com/images/I/91uIIc5KsOS._AC_UY327_FMwebp_QL65_.jpg',
  page:'https://www.amazon.in/Mahabharata-Indian-Epic-Om-Books/dp/8187108258/ref=sr_1_1_sspa?adgrpid=55706873221&dchild=1&ext_vrnc=hi&gclid=Cj0KCQjwwY-LBhD6ARIsACvT72PeQoEPuwvxVeVrjDsYtHCCwRwYBCb2bvl8DxB3iIJK25xsGNao4RkaAhS5EALw_wcB&hvadid=356404782907&hvdev=c&hvlocphy=9040204&hvnetw=g&hvqmt=b&hvrand=6191096456194856760&hvtargid=kwd-298449181569&hydadcr=1545_1932136&keywords=mahabharata+debroy&qid=1633963823&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVUpYOVpURzNXMUdLJmVuY3J5cHRlZElkPUEwMzQ4NjYyMlFKQkZEUldEWVowMiZlbmNyeXB0ZWRBZElkPUEwMzgyOTg0M0Q1OTlJSjlJMTlYQiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
   },
    {
  title:'Sita: Warrior of Mithila ',
  author:'Amish Tripathi ',
  img:'https://images-na.ssl-images-amazon.com/images/I/51d2SjL97IL._SX316_BO1,204,203,200_.jpg',
  page:'https://www.amazon.in/Sita-Warrior-Mithila-Ram-Chandra/dp/9386224585?ref_=Oct_d_omg_d_1318166031&pd_rd_w=dz1DH&pf_rd_p=08c11e88-e067-4bc4-b9d6-6edb527ce33f&pf_rd_r=6SRGXBT7QEMZ42E9D6Z6&pd_rd_r=5f13ddf0-e3b8-4c9d-b552-3ec58d58d8e1&pd_rd_wg=avxuH&pd_rd_i=9386224585',
   },
   {
  title:'The Immortals of Meluha (Shiva Trilogy) ',
  author:'Amish Tripathi ',
  img:'https://images-eu.ssl-images-amazon.com/images/I/41VUs-509HL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
  page:'https://www.amazon.in/Immortals-Meluha-Shiva-Trilogy/dp/9380658745?ref_=Oct_d_obs_d_1318166031&pd_rd_w=Zf6up&pf_rd_p=be246493-e499-4f85-8975-3f92008c0670&pf_rd_r=6SRGXBT7QEMZ42E9D6Z6&pd_rd_r=5f13ddf0-e3b8-4c9d-b552-3ec58d58d8e1&pd_rd_wg=avxuH&pd_rd_i=9380658745',
   },
   {
  title:'Immortal Talks ',
  author:'shunya',
  img:'https://images-na.ssl-images-amazon.com/images/I/417nHRNXq4L._SX311_BO1,204,203,200_.jpg',
  page:'https://www.amazon.in/Immortal-Talks-Shunya/dp/8193305205/ref=zg_bs_1318166031_21?_encoding=UTF8&psc=1&refRID=RXVRQ2EMXB3VGNHX0K4P',
   },
   {
  title:'365 Tales from Indian Mythology ',
  author:'Om Books Editorial Team ',
  img:'https://images-na.ssl-images-amazon.com/images/I/51ur-aHOT6L._SX355_BO1,204,203,200_.jpg',
  page:'https://www.amazon.in/365-Tales-Indian-Mythology-Books/dp/8187107464/ref=zg_bs_15412173031_3?_encoding=UTF8&psc=1&refRID=2WKT4CS23TXCRJWRS7D9',
   },
   {
  title:' Ramayana For Children : Immortal Epic of India ',
  author:'shuba vilas',
  img:'https://images-na.ssl-images-amazon.com/images/I/51R0k6DiVxL._SX427_BO1,204,203,200_.jpg',
  page:'https://www.amazon.in/Illustrated-Ramayana-Children-Immortal-Deluxe/dp/9390391598/ref=zg_bs_15412173031_6?_encoding=UTF8&psc=1&refRID=2WKT4CS23TXCRJWRS7D9',
   },
   {
  title:'Chronicles of Kuru Woman Krishna\'s Sister ',
  author:'Priyanka Bhuyan',
  img:'https://m.media-amazon.com/images/I/51e8yErm+YL.jpg',
  page:'https://www.amazon.in/Chronicles-Kuru-Woman-Krishnas-Sister-ebook/dp/B086JTFY7V/ref=zg_bs_15412173031_42?_encoding=UTF8&psc=1&refRID=2WKT4CS23TXCRJWRS7D9',
   },
  
   {
  title:'Kailash Dwara : Doorway to Bhuloka  ',
  author:'viesh',
  img:'https://m.media-amazon.com/images/I/41I+zQqHmDL.jpg',
  page:'https://www.amazon.in/Kailash-Dwara-Doorway-Bhuloka-Vishesh-ebook/dp/B082SZZHV9/ref=zg_bs_15412173031_46?_encoding=UTF8&psc=1&refRID=2WKT4CS23TXCRJWRS7D9',
   },
   {
  title:'Satyayoddha Kalki: Eye of Brahma',
  author:'Kevin Missal',
  img:'https://images-na.ssl-images-amazon.com/images/I/51XBGvL0ljL._SX460_BO1,204,203,200_.jpg',
  page:'https://www.amazon.in/Satyayoddha-Kalki-Eye-Brahma-Book/dp/9388369157/ref=pd_rhf_ee_s_pd_crcd_4/259-2806703-5449960?pd_rd_w=Nki8Y&pf_rd_p=a62021ef-ed94-4c60-92cc-5878fb8afd3c&pf_rd_r=8X899KD4FE56H4YSDRT2&pd_rd_r=dd14a5c6-cfc7-4124-bc3c-144486f954ce&pd_rd_wg=UwGpr&pd_rd_i=9388369157&psc=1',
   },
   {
  title:'Dashavtar The Ten Divine forms of Vishnu ',
  author:'Sunita Pant Bansal',
  img:'https://images-na.ssl-images-amazon.com/images/I/51XCC9PX+SL._SX404_BO1,204,203,200_.jpg',
  page:'https://www.amazon.in/Large-Print-Sunita-Pant-Bansal/dp/8187108398/ref=pd_rhf_ee_s_pd_crcd_2/259-2806703-5449960?pd_rd_w=LgM6I&pf_rd_p=a62021ef-ed94-4c60-92cc-5878fb8afd3c&pf_rd_r=PE9N7YTNH3S0QP56JVXC&pd_rd_r=fa31ad2a-8f3b-4e08-9701-e8eddea95186&pd_rd_wg=dadQF&pd_rd_i=8187108398&psc=1',
   },
   {
  title:'Immortal Talks ',
  author:'shunya',
  img:'https://images-na.ssl-images-amazon.com/images/I/417nHRNXq4L._SX311_BO1,204,203,200_.jpg',
  page:'https://www.amazon.in/Immortal-Talks-Shunya/dp/8193305205/ref=zg_bs_1318166031_21?_encoding=UTF8&psc=1&refRID=RXVRQ2EMXB3VGNHX0K4P',
   },
   
];
 
function Booklist()
{
  return(
    
    <section className='booklist'>
     
      <Book img={books[0].img} title={books[0].title} author={books[0].author} page={books[0].page}/>
      <Book img={books[1].img} title={books[1].title} author={books[1].author}  page={books[1].page}/>
      <Book img={books[2].img} title={books[2].title} author={books[2].author}  page={books[2].page}/>
      <Book img={books[3].img} title={books[3].title} author={books[3].author} page={books[3].page}/>
      <Book img={books[4].img} title={books[4].title} author={books[4].author} page={books[4].page}/>
      <Book img={books[5].img} title={books[5].title} author={books[5].author} page={books[5].page}/>
      <Book img={books[6].img} title={books[6].title} author={books[6].author} page={books[6].page}/>
      <Book img={books[7].img} title={books[7].title} author={books[7].author} page={books[7].page}/>
      <Book img={books[8].img} title={books[8].title} author={books[8].author} page={books[8].page}/>
      <Book img={books[9].img} title={books[9].title} author={books[9].author} page={books[9].page}/>
      <Book img={books[10].img} title={books[10].title} author={books[10].author} page={books[10].page}/>
      <Book img={books[11].img} title={books[11].title} author={books[11].author} page={books[11].page}/>
     

    </section> 
     );
};
const Book =(props)=>
{
  
  return(<article className='book'>
    <img  src={props.img} alt=""/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    <a href={props.page} target="_blank">click to shop </a>
   
   
    </article>
    );
};


ReactDOM.render(<Booklist  />,document.getElementById('root'));

