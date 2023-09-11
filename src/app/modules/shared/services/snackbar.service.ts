import {
  ApplicationRef,
  EmbeddedViewRef,
  EnvironmentInjector,
  Injectable,
  Injector,
  createComponent
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  config: any = {
    component: null,
    msg: 'Here is your notification.',
    timeout: 3000
  };

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private environmentInjector: EnvironmentInjector
  ) {}

  show(msg = '') {
    // 0. config component
    if (this.config.component == null) {
      console.log('Not found toarst component');
      return;
    }

    // 1. Create a component reference from the component
    const componentRef: any = createComponent(this.config.component, {
      elementInjector: this.injector,
      environmentInjector: this.environmentInjector
    });

    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    document.body.appendChild(domElem);
    componentRef.instance.msg = msg;

    // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
      componentRef.instance.state = 'removed';
      setTimeout(() => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
      }, 400);
    }, this.config.timeout);
  }
}
