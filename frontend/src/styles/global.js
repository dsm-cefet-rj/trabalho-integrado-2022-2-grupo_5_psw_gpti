  
import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
  }
  body {
    font: 14px 'Poppins', sans-serif;
    background: #ecf1f8;
    color: #333;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }

  .container {
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
    padding: 1rem;
  }
  
  article h1 {
    margin: 1rem 0;
  }
  .home{
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10%;
}
.homeCronograma{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 2%;
}
.home-text{
    max-width: 100%;
}
.home-text .text-h4{
    font-size: 1.5rem;
    color: var(--purple);
    margin-bottom: 1rem;
}
.home-text .text-h1{
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 4rem;
}

.home-btn{
    padding: 15px 45px;
    background: var(--purple);
    color: var(--white);
    border-radius: 10px;
    font-weight: 700;
    transition: all 0.5s;
}
.home-btn:hover{
    background: #fc4c35;
}
.home-img img{
    width: 100%;
}

.services-container {
  max-width: 1200px;
  padding: 30px 10%;
  padding-bottom: 0px;
}

.service-box {
  width: 100%;
  position: static;
  clear: both;
  height: 150px;
  margin-bottom: 30px;
  
}

.service-box:last {
  margin-bottom: 0px;
}

.service-title {
  width: 20%;
  height: 150px;
  background-color: #DDD;
  float: left;
  text-align: center;
  line-height: 150px;
  padding: 20px;
  box-sizing: border-box;
}

.service-title p {
  padding-top: 35px;
  color: #FFF;
  font-size: 14px;
  line-height: 24px;
}

.service-description {
  width: 80%;
  float: left;
  padding: 30px;
  box-sizing: border-box;
}

.service-description h3 {
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: bold;
}

.service-description p {
  font-size: 14px;
  line-height: 22px;
}

#gerenciamento-box {
  background-color: #2364AA;
  border-radius: 4px;
}

#dev-box {
  background-color: #3DA5D9;
  border-radius: 4px;
}

#design-box {
  background-color: #73BFB8;
  border-radius: 4px;
}

#gerenciamento-title {
  color: #2364AA
}

#dev-title {
  color: #3DA5D9
}

#design-title {
  color: #73BFB8
}

/* Sobre a empresa */
.footer-container {
  background-position: center;
}

.about-container {
  max-width: 1200px;
  padding: 30px 10%;
  position: static;
  clear: both;
}

.about-card {
  float: left;
  width: 30%;
  padding: 30px;
  background-color: #FFF;
  text-align: center;
  box-sizing: border-box;
}

.middle-card {
  margin-left: 5%;
  margin-right: 5%;
}

.about-card i {
  font-size: 50px;
  color: #AAA;
}

.about-card p {
  margin-top: 50px;
  font-size: 14px;
  line-height: 22px;
  color: #888;
  text-align: left;
}

/* Footer */

footer {
  clear: both;
  max-width: 1200px;
  height: 500px;
  padding: 30px 10%;
  position: static;
}

.form-container {
  width: 65%;
  height: 375px;
  position: static;
  display: block;
}



.form-container form {
  position: static;
  top: 30px;
  left: 30px;
  height: 300px;
}

.form-container input, .form-container textarea {
  width: 400px;
  display: block;
  border: none;
  padding: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #AAA;
  border-radius: 0;
  background-color: transparent;
}

.form-container textarea {
  height: 120px;
}

.form-container input::placeholder, .form-container textarea::placeholder {
  font-size: 14px;
}

.form-container .submit {
  background-color: #222;
  color: #FFF;
  border: 1px solid transparent;
  width: 100px;
  position: static;
  float: right;
  cursor: pointer;
  transition: .5s;
}

.form-container .submit:hover {
  background-color: #FFF;
  color: #222;
  border: 1px solid #222;
}

.copyright {
  color: #222;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  position: static;
  left: 0;
  right: 0;  
  bottom: 30px; 
  margin-left: auto;
  margin-right: auto;
}
@media (max-width:786px) {
  .home{
    padding: 100px 2%;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    gap: 5rem;
}
.home .text-h4{
    font-size: 15px;
}
.home .text-h1{
    font-size: 2.5rem;
    line-height: 3rem;
}
.home p{
    font-size: 15px;
}
.home-img{
    width: 125%;
}
#gerenciamento-box {
    background-color: #2364AA;
    border-radius: 4px;
    width: 50%;
    height: 80%;
}
#dev-box {
    background-color: #3DA5D9;
    border-radius: 4px;
    width: 50%;
    height: 80%;
}
#design-box {
    background-color: #73BFB8;
    border-radius: 4px;
    width: 50%;
    height: 80%;
    }

`;