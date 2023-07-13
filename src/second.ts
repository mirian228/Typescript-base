interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}


class Instagram implements TakePhoto {
   
   cameraMode: string;
   filter: string;
   burst: number;

        constructor(cameraMode: string, filter: string, burst: number) {
                this.cameraMode = cameraMode;
                this.filter = filter;
                this.burst = burst;
        }

}