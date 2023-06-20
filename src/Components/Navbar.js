import React from 'react';

function Navbar({ name }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand navbar-dark sticky-top">
  <a class="navbar-brand" href="#">ऐlaan</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav mr-auto" style={{margin:'auto'}}>
     <li class="nav-link active"> Team Name : <span id="playerName">{name}</span> </li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;
