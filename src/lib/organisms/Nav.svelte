<script>
    import { Logo } from '$lib/index.js';
</script>
 
    <nav class="nav-mobile">
        <div class="dropdown">
          <details>
            <summary>
                <Logo />
            </summary>
              <ul class="ul-mobile">
                <li><a href="#">Home</a></li>
                <li><a href="#">Programma</a></li>
                <li><a href="#">Community</a></li>
                <li><a href="#">Extra's</a></li>
                <li><a href="#">Mijn Account</a></li>
              </ul>
          </details>
        </div>
    </nav>

<style>

.nav-mobile {
    display: flex;
    justify-content: space-between;
}

summary {
    list-style: none;
}

summary::-webkit-details-marker {
  display: none; 
}

ul{
    list-style: none;
}

.ul-mobile {
    position: absolute;
    padding: 0.75em 0;
    top: 7rem;
    width: 100vw;
    left: 0;
    background: white;
}

a{
    text-decoration: none;
    color: var(--lightmode-color);
}

.ul-mobile  a {
    display: block;
    padding: 0.5rem 2rem;
    text-align: right;
}

.nav-desktop{
    display: none;

}

/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */
/* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES *//* MEDIA QUERIES */

/* 
@media  (min-width: 850px) {
    .nav-mobile {
        display: none;
    }
    
    .nav-desktop{
        display: flex;
        align-items: center;
    }
    
    .ul-desktop {
        display: flex;
        justify-content: space-between;
        width: 42.5vw;
    }
    
}

@media  (max-width: 1100px) {
    .li-last{
        display: none;
    }
} */

</style>