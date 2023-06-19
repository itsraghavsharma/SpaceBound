import React from 'react'
import Navbar from '../../Components/Navbar'
import Information from '../../Components/Information'
import GameComponent from '../../Components/GameComponent'
import Directions from '../../Components/Directions'



function Home() {
    return (
<div>
        <Navbar/>
        <Information/>
        <GameComponent/>
        <Directions/>
</div>

    )
}

export default Home