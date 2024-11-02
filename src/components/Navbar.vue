<template>
    <nav>
    
      <h1>Lab1</h1>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Bai1</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/Lab1Bai2">Bai2</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/Lab1Bai3">Bai3</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Bai4</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Lab1</a></li>
            <li><a class="dropdown-item" href="#">Lab2</a></li>
            <li><a class="dropdown-item" href="#">Lab3</a></li>
            <li><a class="dropdown-item" href="#">Lab4</a></li>
            <li><a class="dropdown-item" href="#">Lab5</a></li>
            <li><a class="dropdown-item" href="#">Lab6</a></li>
            <li><a class="dropdown-item" href="#">Lab7</a></li>
            <li><a class="dropdown-item" href="#">Lab8</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </nav>
  </template>
  
  <script>

  export default {
   name: 'NavBar',
  }
    
  
  </script>
  
  <style scoped>
  
  </style>