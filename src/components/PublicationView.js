import React, { Component } from 'react';
import { Button } from 'reactstrap';

class PublicationView extends Component{
    render(){
        return ( 
            <div className = "PublicationView" >
                <div class="container p-3 d-flex">
                    <h1 class="display-4"> Publication Title </h1>
                    <div class = "ml-auto" >
                        <Button href="#" variant="secondary" size="lg" disabled>  Previous </Button>{' '}
                        <Button href="#" variant="secondary" size="lg" disabled> Next </Button>
                    </div>
                </div>
                <div class = "container">
                    <img src={require("../images/bg2.jpg")} class="fluid" width="100%" height="250px" ></img>
                    <p class=" my-2">
                        Lorizzle ipsum dolor sit amizzle, consectetizzle adipiscing dawg. Nullam sapien velit, aliquet volutpizzle, suscipit izzle, gravida vel, gizzle. Pellentesque owned tortizzle. Sizzle eros. Dope fo shizzle mah nizzle fo rizzle, mah home g-dizzle dawg dapibus turpis black crackalackin. Uhuh ... yih! pellentesque nibh izzle turpizzle. Shizzle my nizzle crocodizzle izzle tortizzle. Break it down fo shizzle my nizzle rhoncus rizzle. In mofo break it down platea dictumst. Cool dapibus. Curabitizzle tellus urna, pretizzle fo shizzle, mattizzle the bizzle, eleifend vitae, nunc. Shizzlin dizzle suscipizzle. Rizzle rizzle velit you son of a bizzle brizzle.

                        Etizzle a magna sed augue get down get down for sure. Fo shizzle izzle gangsta. Vivamizzle maurizzle dolizzle, viverra vitae, facilisizzle izzle, ghetto, erizzle. Vestibulizzle ante ipsum stuff izzle shiznit orci luctizzle izzle ultrices posuere gangster Its fo rizzle; Dizzle dolizzle. Integer faucibus. Maecenas nizzle blandit quizzle. Fizzle rutrizzle aliquet orci. Sed facilisizzle. Da bomb sizzle nulla, venenatis fizzle, scelerisque shiznit, blandit ac, magna.

                        Maecenizzle izzle we gonna chung. Nizzle break it down. Proin condimentizzle, turpizzle non congue consectetizzle, metizzle libero consequizzle purus, egizzle for sure dui mi non yippiyo. Cras faucibizzle elit. Gangsta nibh shiz, consequizzle shiz, ornare sure, shizzle my nizzle crocodizzle crackalackin, tellizzle. Yo sed bling bling. Crizzle condimentum mi in its fo rizzle. Fo shizzle my nizzle hendrerizzle da bomb felis. Donizzle gizzle crazy a away. Its fo rizzle lacinia mi. Shizznit bizzle. Sizzle gangsta shiz, daahng dawg izzle, eleifend sizzle, malesuada pot, gangster. Vivamus fo shizzle my nizzle mofo nisl.
                    </p>
                </div>
            </div>
                    
                    
            
            
        );
    }
}
export default PublicationView;