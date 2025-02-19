## การใช้ Computer graphics สร้างงานศิลปะ
## เพื่อแสดงความสวยงามของคณิตศาสตร์



# Computer Graphics
<!--[Computer Graphics](./images/CG-small-text.png)-->
<!--[examples](./images/slide/lowres-demo-image.png)<!-- element: style="max-height:600px;" -->


<!-- .element: data-background-image="./images/slide/lowres-demo-image.png" -->


<!--[pixel](./images/slide/pixel-demo.png)<!-- element: style="max-height:700px -->
<!-- .element: data-background-image="./images/slide/pixel-demo.png"  -->


## สร้างข้อมูล

### รูปทรง
- สี่เหลี่ยมสีแดง ขนาด 3x4 ซม.
- ทรงกลมสีขาว เส้นผ่านศูนย์กลาง 2 ซม.

### การจัดวาง
- วงกลมอยู่ข้างสี่เหลี่ยม
- สามเหลี่ยมอยู่กลางภาพ
- ทรงกลมอยู่บนลูกบาศก์


## Projection


![2d-image](./images/slide/2d-image.jpg)<!-- .element: style="max-height:650px;" -->
<!-- element: data-background-image="./images/slide/2d-image.jpg" -->


![3d-projection](./images/slide/3d-obj.jpg)<!-- .element: style="max-height:650px;" -->
<!-- element: data-background-image="./images/slide/3d-obj.jpg" -->


## Shading


![no-shading](./images/slide/no-shading.png)<!-- .element: style="max-height:650px;" -->


![with-shading](./images/slide/sphere-shading.png)<!-- .element: style="max-height:650px;" -->



# Math


![confuse-math](./images/slide/confuse-math.jpg)


<!-- .element: style="font-size:1.1em;" -->
$$
\begin{align*} 
p(t) &= \vec ray_{origin} + \vec ray_{direction} \cdot t \newline
density (\vec v) & = \min_{i,j,k \in [-1,0,1]}\left(\lvert\vec v - rand3\left(\lfloor \vec v \rfloor + \begin{bmatrix} i \newline j \newline k\end{bmatrix}\right)\rvert\right)\newline
color(\vec v) &= \vert\vec v\rvert \cdot color_1 + (1 - \lvert\vec v\rvert) \cdot color_2 \newline
FinalColor &= \int_0^L color(p(t)) \cdot density(p(t)) \cdot dt
\end{align*}
$$


<h2>
$$
\begin{align*}
a^n &= \underbrace{a \times a \times a \times \ldots \times a}_n \newline
4^2 &= 4 \times 4
\end{align*}
$$
</h2>


<h2>
$$
\begin{align*}
a \times b &=\underbrace{a + a + a + \ldots + a}_b\newline
4 \times 4 &= 4 + 4 + 4 + 4
\end{align*} 
$$
</h2>



# แล้วมันเชื่อมโยงกับ Computer Graphics อย่างไร


![airrow-full](./images/slide/airrow-full.png)<!-- .element: style="max-height:650px;" -->


![airrow-one](./images/slide/airrow-single.png)<!-- .element: style="max-height:650px;" -->


![airrow-lr-split](./images/slide/airrow-left-right.png)<!-- .element: style="max-height:650px;" -->


![airrow-left-split-novert](./images/slide/airrow-left-split-novert.png)<!-- .element: style="max-height:650px;" -->


![airrow-left-split](./images/slide/airrow-left-split.png)<!-- .element: style="max-height:650px;" -->


![airrow-left-top](./images/slide/airrow-left-top.png)<!-- .element: style="max-height:650px;" -->


![airrow-left-buttom](./images/slide/airrow-left-buttom.png)<!-- .element: style="max-height:650px;" -->


![airrow-left-split-novert](./images/slide/airrow-left-split-novert.png)<!-- .element: style="max-height:650px;" -->


![airrow-one](./images/slide/airrow-single.png)<!-- .element: style="max-height:650px;" -->


![airrow-full](./images/slide/airrow-full.png)<!-- .element: style="max-height:650px;" -->



# ทำไมถึงเลือกทำหัวข้อนี้



# Reflection of Randomness
![ref-of-rand](./images/reflection-of-randomness.png)


## สุ่ม
![random](./images/slide/random-things-v2.png)<!-- real-presentation only-->
<!--[random](./images/slide/random-things.png)<!---->


## `fract( big_number * sin( x ) )`


` sin(x)  (บน), fract(sin(x)) (ล่าง)`
![sin-fract](./images/slide/sin-fract.png)


` fract( big_number * sin(x)) `

![fract-bign](./images/slide/fract-bign.png)


![random-black-grid](./images/slide/random-black-grid.png)<!-- .element: style="max-height:650px;" -->


## ring
![set-image](./images/set-a-b.png)


![ref-of-rand](./images/ref-of-rand.gif)<!-- .element: style="max-height:650px;" -->



# Leaves Shadow
![reference-image](./images/leaves-shadow-reference.png)
<!--## Fractional Brownian motion
- คล้ายๆ Brownian motion แต่ควบคุมได้มากกว่า
- ทำง่าย แค่เอา noise ธรรมดามาซ้อนกัน-->


![blocky fbm](./images/fbm/fbm-block.png)<!-- .element: style="max-height:650px;" -->


![1d-nearest](./images/fbm/1d-nearest.png)<!-- .element: style="max-height:300px;" -->
![1d-cubic](./images/fbm/1d-cubic.png)<!-- .element: style="max-height:300px;" -->


![cubic fbm](./images/fbm/fbm-cubic.png)<!-- .element: style="max-height:650px;" -->


![final-image](./images/fbm/leaves-shadow-final.png)<!-- .element: style="max-height:650px;" -->


![usage](./images/fbm/shadow-usage.png)<!-- .element: style="max-height:650px;" -->



# Fire in a cube
![fire-in-a-cube](./images/fire-in-a-cube-final.png)


<!-- .element: data-background-image="./images/fire-in-cube/fog-near-far-visibility.jpg" data-background-opacity="50%"-->
## Volumetric Rendering 
<!--[fog](./images/slide/fog.jpg)<!-- element: style="max-height:600px;" -->
<!--[cloud](./images/slide/cloud.jpg)<!-- element: style="max-height:600px;" -->
<!--[smoke](./images/slide/smoke.jpg)<!-- element: style="max-height:600px;" -->


<!--[ray-fog-visibility](./images/fire-in-cube/fog-near-far-visibility.jpg)<!-- element: style="max-height:600px;" -->
<!-- .element: data-background-image="./images/fire-in-cube/fog-near-far-visibility.jpg" -->


<!-- .element: data-background-image="./images/fire-in-cube/fog-near-far-visibility.jpg" data-background-opacity="50%" style="font-size:1.1em;"-->
$$
\begin{align*}
p(t) &= \vec ray_{origin} + \vec ray_{direction} \cdot t \newline
density (\vec v) & = \min_{i,j,k \in [-1,0,1]}\left(\lvert\vec v - rand3\left(\lfloor \vec v \rfloor + \begin{bmatrix} i \newline j \newline k \end{bmatrix}\right)\rvert\right)\newline
color(\vec v) &= \vert\vec v\rvert \cdot color_1 + (1 - \lvert\vec v\rvert) \cdot color_2 \newline
FinalColor &= \int_0^L color(p(t)) \cdot density(p(t)) \cdot dt
\end{align*}
$$


## voronoi diagram
![cells-diagram](./images/fire-in-cube/voronoi-cells.png)


![diagram](./images/voronoi/voronoi.png)<!-- .element: style="max-height:650px;" -->


![diagram-with-grids](./images/voronoi/voronoi-grid.png)<!-- .element: style="max-height:650px;" -->


![constant-density](./images/fire-in-cube/fog-constant-dencity.png)<!-- .element: style="max-height:300px;" -->
![variable-density](./images/fire-in-cube/fog-variable-dencity.png)<!-- .element: style="max-height:300px;" -->


![big-step](./images/fire-in-cube/fog-variable-dencity-step-big.png)<!-- .element: style="max-height:300px;" -->
![small-step](./images/fire-in-cube/fog-variable-dencity-step-small.png)<!-- .element: style="max-height:300px;" -->


![fog-compare-steps](./images/fire-in-cube/fog-compare-steps.png)<!-- .element: style="max-height:650px;" -->


<!-- .element: style="font-size:1.1em;" -->
$$
\begin{align*}
FinalColor &= \int_0^L color(p(t)) \cdot density(p(t)) \cdot dt \newline
FinalColor &= \sum^{steps} color(p(t)) \cdot density(p(t)) \cdot dt
\end{align*}
$$


<!--[black-white-fire](./images/voronoi/fire-in-a-cube.frag_1280x720.png)<!-- element: style="max-height:650px;" -->
<!-- .element: data-background-image="./images/voronoi/fire-in-a-cube.frag_1280x720.png" -->
<!-- .slide: data-background-color="black" -->


<!-- .slide: data-background-color="black" -->
![final-image](./images/fire-in-a-cube.gif)<!-- .element: style="max-height:650px;" -->



# ประสบการณ์



# ?
