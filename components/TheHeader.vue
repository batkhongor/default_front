
<template>
    

    <div>

        <div class="ui tablet computer only compact  fluid  menu">
            <transition name="menu-popover">
            <sui-container class="borderless menu ">
                <div class="item header borderless">
                    {{ $t('company.name') }}
                </div>
                
                    <nuxt-link class="item" :to="localePath('/')">{{ $t('navs.home.title') }}</nuxt-link>
                    <nuxt-link class="item" :to="localePath('/about')">{{ $t('navs.about.title') }}</nuxt-link>
                    
                
                <nuxt-link class="item" :to="localePath('/contact')">{{ $t('navs.contact.title') }}</nuxt-link>

                <div class="right menu">
                    <sui-dropdown class="ui dropdown item"  v-bind:text="selected_language" button pointing>
                        <sui-dropdown-menu>
                            <sui-dropdown-item
                            v-for="locale in availableLocales"
                            :key="locale.code"
                            @click="changeLang(locale.code)">{{ locale.name }}</sui-dropdown-item>
                        </sui-dropdown-menu>
                        
                    </sui-dropdown>

                    <div class="item hidden">
                        <div class="ui primary button">Sign In</div>
                    </div>
                </div>

            </sui-container>
            </transition>
        </div>
    

    <div class="ui mobile only padded grid">
        <div class="ui top fixed borderless huge fluid menu">
        <a class="header item" style="width:30%">{{ $t('company.name') }}</a>
        <div class="right menu">
          <div class="item">
            <button class="ui icon toggle basic button" @click="toggleMenu">
              <i class="content icon"></i>
            </button>
          </div>
        </div>
        <div ref="menu_side" class="ui vertical borderless fluid huge menu" @click="toggleMenu()" style="display: none;">
            <nuxt-link class="item" :to="localePath('/')">{{ $t('navs.home.title') }}</nuxt-link>
            <nuxt-link class="item" :to="localePath('/about')">{{ $t('navs.about.title') }}</nuxt-link>
            <nuxt-link class="item" :to="localePath('/contact')">{{ $t('navs.contact.title') }}</nuxt-link>

            <div class=" right menu">
                <sui-dropdown class="ui dropdown item"  v-bind:text="selected_language" button pointing>
                    <sui-dropdown-menu @click="toggleMenu()">
                        <sui-dropdown-item
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        @click="changeLang(locale.code)"
                        >{{ locale.name }}</sui-dropdown-item>
                    </sui-dropdown-menu>
                    
                </sui-dropdown>

            </div>
            <div class="item hidden">
                    <div class="ui small primary button">Sign In</div>
            </div>
        </div>
      </div>
    </div>

    </div>
    
</template>

<script>
export default {
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$store.state.locale)
        },
        selected_language() {
        // this.$t("title") returns the value of our title attribute in our JSON file
        // The correct file is selected based on the locale value
        // If it was an object, we could access its attributes like so: this.$t("myObject").myAttribute
        return this.$store.state.locale;
        },
        lang: {
            get: function() {
                return this.$store.state.locale
            },
            set: function(newVal) {
                this.$store.dispatch('SET_LANG', newVal)
            }
        }
    },
    methods: {
    changeLang (lang) {
      this.$store.commit ('SET_LANG', lang);
      this.$store.commit ('increment');
      
      //this.$router.switchLocalePath(lang);
      this.$cookiz.set("locale", lang, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7
      });
    },
    toggleMenu(){
        if (this.$refs.menu_side.style.display=='none')
            this.$refs.menu_side.style.display='inline';
        else 
            this.$refs.menu_side.style.display='none';

        console.log(this.$refs.menu_side.style.display);
        //$(".mobile.only.grid .ui.vertical.menu").toggle(100);
        

        
    }
  }
}
</script>


<style lang="scss" scoped>
  .top-header {
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;
    
  }

  .menu-popover-enter {
    opacity: 0;
    transform: rotateY(50deg);
    }

    .menu-popover-enter-active {
  transition: opacity, transform 200ms ease-out;
}

.menu-popover-enter-to {
  opacity: 1;
  transform: rotateY(0deg);
}
  .borderless.menu {
      border: 0px;
      box-shadow: none;
  }

  .borderless.menu a.item:hover{
      border-bottom: 1px solid $brand-green-dark;
      
      color: $brand-green-dark;
  }

  .xp_test{
      border: 2px solid red;
      display: row;
  }
  .ui.menu {
      border: none;
      //box-shadow: none;
  }
 
   a.item:hover{
       color: $brand-green-light;
       background-color: red;
   }

   .ui.link.menu .item:hover {
        background: #1B1C1D;
        color: #17AA1C;
    }

  .top-header__logo {
    text-align: center;
    position: absolute;
    left: 50%;

    img {
      position: relative;
      max-height: 60px;
      left: -50%;
      top: -15px;
    }
  }

  .top-header__second-navi {
    text-align: right;
  }
</style>