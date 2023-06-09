import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{ housingLocationId }}
      Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Voluptatibus ab quis voluptates, 
       officia aliquid esse recusandae dolor sed mollitia 
       repellendus ipsum. Aperiam libero eum dolore suscipit
        molestias dicta voluptas officia. Aut nostrum cum 
        voluptatem doloribus officia aliquid quis in voluptatibus 
        molestiae necessitatibus? Voluptatum corrupti, rerum
        dignissimos nemo culpa minus eos autem facilis doloremque 
        odit corporis, ad, temporibus error omnis pariatur 
        eveniet optio suscipit impedit totam excepturi?
         Dignissimos officia cum totam cupiditate, itaque, ut
    </p>
    <section>
      <img
        src="/assets/example-house.jpg"
        width="400px"
        height="400px"
      />
    </section>
    <p>
      details works! {{ housingLocationId }}
      Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Voluptatibus ab quis voluptates, 
       officia aliquid esse recusandae dolor sed mollitia 
       repellendus ipsum. Aperiam libero eum dolore suscipit
        molestias dicta voluptas officia. Aut nostrum cum 
        voluptatem doloribus officia aliquid quis in voluptatibus 
        molestiae necessitatibus? Voluptatum corrupti, rerum
        dignissimos nemo culpa minus eos autem facilis doloremque 
        odit corporis, ad, temporibus error omnis pariatur 
        eveniet optio suscipit impedit totam excepturi?
         Dignissimos officia cum totam cupiditate, itaque, ut
         
 
    </p>
    <p>
      details works! {{ housingLocationId }}
      Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Voluptatibus ab quis voluptates, 
       officia aliquid esse recusandae dolor sed mollitia 
       repellendus ipsum. Aperiam libero eum dolore suscipit
        molestias dicta voluptas officia. Aut nostrum cum 
        voluptatem doloribus officia aliquid quis in voluptatibus 
        molestiae necessitatibus? Voluptatum corrupti, rerum
        dignissimos nemo culpa minus eos autem facilis doloremque 
        odit corporis, ad, temporibus error omnis pariatur 
        eveniet optio suscipit impedit totam excepturi?
         Dignissimos officia cum totam cupiditate, itaque, ut
        
    </p>
    <p>
      details works! {{ housingLocationId }}
      Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Voluptatibus ab quis voluptates, 
       officia aliquid esse recusandae dolor sed mollitia 
       repellendus ipsum. Aperiam libero eum dolore suscipit
        molestias dicta voluptas officia. Aut nostrum cum 
        voluptatem doloribus officia aliquid quis in voluptatibus 
        molestiae necessitatibus? Voluptatum corrupti, rerum
        dignissimos nemo culpa minus eos autem facilis doloremque 
        odit corporis, ad, temporibus error omnis pariatur 
        eveniet optio suscipit impedit totam excepturi?
         Dignissimos officia cum totam cupiditate, itaque, ut
    </p>
    <p>
      details works! {{ housingLocationId }}
      Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Voluptatibus ab quis voluptates, 
       officia aliquid esse recusandae dolor sed mollitia 
       repellendus ipsum. Aperiam libero eum dolore suscipit
        molestias dicta voluptas officia. Aut nostrum cum 
        voluptatem doloribus officia aliquid quis in voluptatibus 
        molestiae necessitatibus? Voluptatum corrupti, rerum
        dignissimos nemo culpa minus eos autem facilis doloremque 
        odit corporis, ad, temporibus error omnis pariatur 
        eveniet optio suscipit impedit totam excepturi?
         Dignissimos officia cum totam cupiditate, itaque, ut
    </p>
    <p>
      details works! {{ housingLocationId }}
      Lorem ipsum dolor sit amet consectetur,
       adipisicing elit. Voluptatibus ab quis voluptates, 
       officia aliquid esse recusandae dolor sed mollitia 
       repellendus ipsum. Aperiam libero eum dolore suscipit
        molestias dicta voluptas officia. Aut nostrum cum 
        voluptatem doloribus officia aliquid quis in voluptatibus 
        molestiae necessitatibus? Voluptatum corrupti, rerum
        dignissimos nemo culpa minus eos autem facilis doloremque 
        odit corporis, ad, temporibus error omnis pariatur 
        eveniet optio suscipit impedit totam excepturi?
         Dignissimos officia cum totam cupiditate, itaque, ut
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;
  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id'])
  }
}
