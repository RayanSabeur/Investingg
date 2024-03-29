import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
    return (
      <>
       	<div class="navigation-wrap bg-light start-header start-style">
		<div class="container">
			<div class="row">
            <div class="col-12">
            <nav class="navbar navbar-expand-md navbar-light">
					
                    <a class="navbar-brand" href="https://front.codes/" target="_blank"><img src="./img/logo.png" alt="" srcset=""></img></a>	
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto py-4 py-md-0">
                           
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="#">Portfolio</a>
                            </li>
                           
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="#">à propos</a>
                            </li>
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                    
                </nav>		
				</div>
			</div>
		</div>
	</div>
      </>
    );
};

export default Navbar;