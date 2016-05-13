import {inject} from 'aurelia-framework';
import {Session} from '../../session';
import {Router} from 'aurelia-router';

@inject(Session, Router)
export class NavBar
{
    constructor(session, router)
    {
        this.session = session;
        this.router = router;
        this.name = this.session.data.user.name;      
    }    
    
    logout()
    {
        this.session.remove()
        .then(r=>{
            this.router.navigateToRoute('login');
        })
    }
}