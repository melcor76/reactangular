import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
    <div class="container">
      <img
        src="data:image/png;base64,
        iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
        AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZ
        cwAADdcAAA3XAUIom3gAAAAHdElNRQfjBwcTKwVriTPqAAAB1klEQVRIx6WTz0sbQRTHP0kEERXx
        BxVR23ry10GKCNKjiKJHwT/A/0HxVPDoyaOIN6UneykIIoFi8RCCugUjGldRxFgLYiJqdNVNNh6y
        0Z1k0p3VN5c3+933mXlv3oPMyxqnFs/md/gDdLwP8JUvlHsF+OgG4Bt9VPCXS9LKsRkMfuY2o0Qd
        1VBdJge5FNbY4c5zATLsB2z3nio6qfMYnmDydfuJHxieEkiySNnrK5yyTszD+WnOmMfwOy70iwim
        MuCGIGGxD3TC/FMMNzlkgZQISPMbTbEP4gT5AyIAtgkTVzp/l+9kCgEmITaywn8txgp61vXnSRoh
        HlzCU0RYym3yAQYnnLoAdJY5Kya2MOfSPnGmnTNbIoT7GWYISLBFVIK3uGSTTe6LAXropxELjYki
        l0zzyKOzzCKgly4CHBMkqtqTIqCJD4BFPSOukVcECwFJDMppYIRBV8BeFiBaHys8KQ7zliwFjTmO
        aKFCIXm7E315n0tpoFkJcE2o8AY+6mmjjlsO0LEKgnw00/GiS+wjE2gk0Jmh9Q06Y+zYJTpnSk0X
        h6mdz7ZXQ68EINFFwANPtpciKQFIdBGwQQQTixQxViUAiR4Qfjjmgmoq2WWWBckrSPRnLTn4EL3y
        +soAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDctMDdUMTc6NDM6MDUrMDI6MDAgdqayAAAAJXRF
        WHRkYXRlOm1vZGlmeQAyMDE5LTA3LTA3VDE3OjQzOjA1KzAyOjAwUSseDgAAABl0RVh0U29mdHdh
        cmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
        alt="Cart"
        style="width:100%"
      />
      <div class="badge" attr.data-badge="{{ counter }}"></div>
    </div>
  `,
  styles: [
    `
      .container {
        position: relative;
        text-align: center;
        width: 30px;
        height: 30px;
      }

      .badge {
        position: relative;
      }
      .badge[data-badge]:after {
        content: attr(data-badge);
        position: absolute;
        top: -38px;
        right: -6px;
        font-size: 0.7em;
        background: green;
        color: white;
        width: 18px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        border-radius: 50%;
        box-shadow: 0 0 1px #333;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CartComponent {
  @Input() counter: number;
}
