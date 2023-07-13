abstract class MakePhoto {
    
    cameraMode: string
    filter: string

    constructor(cameraMode: string, filter: string) {
       this.cameraMode = cameraMode;
       this.filter = filter; 
    }

    abstract getSomething(): void;

}



