<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <div id="square">
        <div id="circle"> </div>
      </div>
      <span id="audilo">Adilo</span>
    </a>

    <div class="" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Projects </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Tools & App <span class="sr-only">(current)</span>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Snapybyte Recorder</a>
            <a class="dropdown-item" href="#">AudioBounce</a>
            <a class="dropdown-item" href="#">Sugar Voice</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Channels</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Analytics</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Settings</a>
        </li>
      </ul>

    </div>
    <div class="img">
      <div class="">
        <h3>Help</h3>
      </div>
      <div class="profile">
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" height="50" width="50" class="i"/>
        <div class="text">
          <h3 class="text-bold">Cody Fisher</h3>
          <p>codyfisher@gmail.com</p>
        </div>

      </div>
    </div>
  </nav>

</template>

<script>
  
export default {

}
</script>

<style>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}
#square {
  top: 10px;
  left: 51px;
  width: 40px;
  height: 40px;
  background: #FBBD71 0% 0% no-repeat padding-box;
  border-radius: 10px;
  opacity: 1;
}

#circle {
  background: transparent url('../assets/img/swarm.png') 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  top: 8px;
  left: 8px;
  width: 26px;
  height: 26px;
}

#audilo {
  top: -25px;
  left:  100px;
  text-align: left;
  font: normal normal bold 28px/32px Helvetica;
  letter-spacing: 0px;
  color: #21455E;
  opacity: 1;
}
#navbarSupportedContent{

justify-content: center;
display: flex;
}
.nav-item {
margin-left: 50px;
  font: normal normal medium 18px/27px Poppins;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
}
.img{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 100px;
}
.profile{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
  border-left: 2px solid gray;
  padding: 10px;
}
img{
  border-radius: 25%;

}
.i{
  margin-right: 2%;
}
</style>