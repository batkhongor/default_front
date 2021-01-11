<template>
  

  <div  class="ui brand_bcolor footer">
      <div class="ui grid center aligned stackable">
        
        <div class="three wide column ">
          <p class="left_aligned">  </p>
        </div>

        <div class="two wide column "><i class="phone square icon"></i>
          <p class="left_aligned">  9911-1307, 9192-8096 </p>
        </div>

        <div class="two wide column ">
            <i class="facebook squared icon  "></i>
            <i class="twitter squared icon  "></i>
            <i class="linkedin squared icon  "></i>
            <i class="instagram squared icon  "></i>
        </div>

        <div class="four wide column ">
            <i class="map marker alternate icon  "></i><p class="left_aligned"> {{ $t('company.location') }}</p>
        </div>
        
      </div>
      <br><br>
      
      <sui-divider />

      <div class="ui grid center aligned">
        <div class="sixteen wide column ">© 2020 {{ $t('company.name') }}. {{ $t('copyright') }}</div>
      </div>
      
      
  </div>
</template>


<style lang="scss" scoped>


  .test_border{
    border: 2px solid red !important;
  }
  .brand_bcolor{
    background-color: $brand-green-dark;
    color: white;  
  }

  .xp-default-white{
    background-color: white;
    
  }

  .footer{
    font-size: 14px;
    
    width: 100%;
    display: inline-block;
    padding: 50px 0px 20px 0px !important;
  }

  .icon  {
    float: left;
    
  }

  i {
    &.icon {
      font-size: 24px;    
      padding-right: 0;
      margin-right: 0;
      //text-shadow: 0 1px #ddd;
      cursor: pointer;  
      &:hover {
        color: $brand-black;
      }             
    }
  }
  

  .bottom-footer__link {
    color: white;
    text-decoration: none;
  }

  </style>