const img_down = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE3ElEQVR42rWWa2wUVRTH/ztb2hJp6XMxUeoHrN0+eIhEwUailQiNH5oYP7p+MVqQthINgi/SEDS4RVqx8gaDoH5SsU9apGDF1hDTUkoB+5A+trul7IPtbtt9zMz1zMx2uk2qdBtmds7eO3c38//dc8499+ow1+uxD9jMATZLN9QZ/DydvkfIvPd7rS4SgBNfliBKr1P1GFNEGZt+fqOknADMRfTYQNb7QAGOlZfAdudumCBTW6m79BED3nyHAIbKKmj4FNnVBwpwZH8xbCPTAKIsHIIQGWIWJmLXnq8JYJ82AIf2FWPYNjpDlIVC0Dc4hgWxBnx/5gRg2a8FwE5WaS6G1ToKURIVp9xPgR4YQ2e3A5kZT6Dqx5PAcIU2HjiwtwhDw1JyM/mWGCy2cXTcsmPCx2NFthE1P5EHrAe0Aaj4bCsGLSOq+93eAK7edMDumpRpcgig7uxxAqjUJgRf7FEAWCj5unpc6CP3i6IgxyInOxP1Z48BtoPaAJTt3oqBIassbnf60HbDDr+fV5KRicjOykTDL0epBB3WBmBv6dvoH7TKgjd6XRiweqgvqpadlYXGqiPAnaMaAKTtZJ/u2iIDjHkCaKfY+3wBVVwky8rMwq/Vh4HR49oA7P54C273WzBk86Kn3x0SFsAEQQ6B0ZiNpppDwN2T2gCUfrQZff8M4Toln8M5SQCCAiEorTEzGxdrJYBvtADYwT7ZuRldN/vR8bcDQUq+qdmLchgEZBhz8FvdQcB+ShuAD7cX4kpbD7pv35NdLovLs5daUQZoricAx7daALzPdrxbiOY/b9F+4Jk5e4GXQ5BuXI7L52gzcpzRAGDpdvbetkI0/d5FlW8iTFyaPS+36caV+KOhEnB+pw3AtuK30HCxA97xgOx62f0yiKACtDR8Bbh+mCdA2vZHodM30XC6erySt15p8xFRXFSIuvPtVP2CavwVCKUaPm5cgdbGSuX/OunVHN166kvGueHvex3uS830wxiZOJsHOBhe3RgVZ/z5lYL8mMTEeASDIvwBpdAkJSxCbWM7eJ4PifOqF6QcWJaxEr4JN2nrFON0mPS60H39vE+4d+E0/AM0OVwhGyTjZwOQnhOQsN4Ua8grLyh4mfN6xuHzU8VjkiCjzccFkQ+bvSiodUA9KtGlj4pG6sMGdHfUs6C9+jKCthYalgDayJz/5QHFC0AKFue+FrtkQ1l+fj43MS5B+CGQ8IDFLbdTrp9KRPmUxJQTUpQ+GilLSPxaLeMdtS0IjrTSOy+Q/RUu/n9JSEFDMhavI09sML+0MZ8bG/PA7/PRAcQDPsgr4oKoVkPZ6KOXxFNT0dNZw3hnHYnfaQ3NXBJ3hIvfbxUoEPHrTDGGPHPeiwThdsMy7EQgwM9cASH3c1wUkg2p6L1WzXjXufuKz2UZhiCeMcWkvGBe//wmbmBwFB6PV8mDsNnrSTwpJQW9nXMXnwvANETc06bo5OfMa9Zu4iyWUfgnJ1QAjpZZMon3XKuKSHyuANMQi9aYopNyzSue2sSNjBCEbzIknkzZTuLO+ojEIwEIg1htWpDwrHn56nzObnciPj4Ot9ol8dqIxSMFmIZ46EmCWFu2zJir671xifH26nmJzwcgDGKVCQuzSqm0tiJo7ZiP+HwBpiGAVWRpZP1kHZGKS9e/9mpxTo+GC8MAAAAASUVORK5CYII=";
const img_up = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExElEQVR42rWW/1MUZRzH3xt3WsCETWnTN9CU42uR2vRrPzo2MlBNNZNTHMe3HC1RkZF/ImrGGpucGiYdrJwQQhQi8AsdQsdXyZkEBQQJVPCOu4Pb291n+zy7eyfYEXfO7M68b5+73X3er8/7eZ69R8CjHskVr0OwNCAwXoqZ2g76xUtSYu1GeFTz+IQkZ+7ON631Z9tZYKb1INyXa+nKbKwQsQMY5p8U5VufWAN4fCqO19SxwHRLJTx//BArRGwAhnmZI99qEWTIigJLnAW+RQHfnzhDEM0E4YwJInqAJeaCKkGWFaj8d/qwWOKwIMah5mQoieghogMg84TEJGepPd+qsmDYXFW5VO3MIRaDcThZS0nM/BY1xOoAhnlxQZ6VKYa5CgOAzBm1BAGMztY4HeLHn+t1iPnOVSGEaMyLPiZzOQhJUcIVL62eGSD8+5xHpvusuNDWxEQO4e3+XwghGvOgKGoTLmzOqzcMeZtX7/VLGJ/ywe0RsXaNFc8+k4SuDoK421YJn2tFCGEl88TEdc7Cj3I1c4liZ4bzg+j1yhk17nuCGL/tw2JApmuMrjGssVqx4ekkuJyNLDh7sRL+vogQQgTzbWsfT/i9cPeudRvWJ0EMMhp3phk/mRiP4dFJPXam07i9IsbIPCDKyMlOg9/nhaLoEAo9N++ew1BPk6R4Oiuw+Ncp6uYeDy0yAJlDsLZS66lIwVQeKMHE5JReOQGIkoIb4174F4Ja5TnZ6Wg4fZzAZBIVyhT9zKX45+C7sg/S7fPUlRt6mP9JwMIxSG+QMkmJ4XtSqsoryosxdiuUADA148fM7KIeO1X9SlYazv5CAP8cbaQnpkm+JX3PkwZJXaSpUAoPAzzGkyatJ8Uvu55S1Xfgs2KMjk1o1S/QeI9OzBtxUyKKjOysDJyr+4asjxEFmkkjS/pmBtBd4xwxgZWPlCqVA4zcvKWN7dSdBbjnRYJRtPHmysxIR8uZY8Cdb7+gJ2pI/at1GwPAEXX/3mIME4BEY3+TqtdeSpSABkHLNCMjE60NX1ON35kDsG9PEf4eGcOcW8S9ORp7rXo9fg6Qlp6J9savaJ7XmAOwp8yB68NjmJz2IxCQwpUzip/JEmxpWbjUdJRW+wkTAJKPqGWlDgxdu6HNfoWqZooBoElGqi0bHee+BO6fMgegpKQQrt7rmHUv6GPPIWRZGwpG82EzAXQ2E4D7JzMADqsORxGc3dfg94varA+ZK7IOstn2KrpayNtz2gSAlw6rBXYHLl8ZgiRKRuwkSdKToPbLqTn4s/VzeuXUmQFQoX6424GOzkHdmIXMFW0C8u+btryGnrZqswAOqe9/UIjObgNAlh+Y8zYHSN2K3jZKwFtvAsCLh9R33itAt+vq8uhDIKRNtq3oa682C+CgmveuHS7XwPLKjTT4ZNxo247+CzyBBhMAXihXc9+2o6d30DA2qjcg+KrYaNuGgYsc4FczAParb+XZ0d83oK15ngBffqoxIfl7IYUSGOQAPjMAnv9U3ZlXiP7eAT3+pRNR4ZsOhuTU7bh6qdo8gB277PRPSFs0+jfk2zRdHEANb1jNS+C5vaq+zZJoexXUt128zfTq9R0r07s0BQDYQtphnFc7+E7o4R1RxONfEHilTmXmOLoAAAAASUVORK5CYII=";
const img_left = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEg0lEQVR42u2WW2wUVRjH/zO703u3m+1FmtA2Ghd6AywtVquEWChNoJEg0ZSHlReFaMBEU4I+EeMDycZgg4LiJSrBB2M0GDVeQEM0bIkJERvfFBOM9EJpS7vL7szuzBm/c5ndBfShSbu8OJsv58yZOd//d77vm3NWwx2+tP8BFvR249Ba/PXqKPWYsgICcHHNOIPLh7robobseuEAGoe6/EbZadvOBAlgJ41cIPu9IADGPQfWhUKhc0PPPmrsf/kECOAVGv6U7NelB6CVD27rPr+1v9vn9/uxc8/rHOA1ekIkuLi0ACT+yENtI7uf3OSPJywEq8rxxNNHOMAwPf1waQFIfHXr3SPPPzPgj8dN2A5DbagSkb1HCwBA4g3L62MH9m03EjdMOI4Dl4braqqw+4U3qedKc9X7rrqXN8rIrctuHlPDstXkzd+Hw9qt4tWh6tj+53YYyaRcORfgGo3L60QrDG62LySYK/wy3qr3mYvsXG/MzVv1SweplK4c2avli1dWBmP79jxmpC2LxB0loCYLEZccuyg2fLiRzCCZspE0M0hbDsy0A4ssk7FprgvHZjSPkRj9NBc+nwa/X0cRzW1rCePYMUrn+NFhzRMvLQvEntq1zXDsNGzbkdQ02WUsu5p4Io140kaCxFOpNK7NWkJERJjJzdFVUZCD0pjwBAHDr9b2VTjz1bvAxHECIPGS0kBs8PGtBlgGGcdWTgDTsjEbT2OObH7eonqQEeD5dQWVarkIB2FMhZup1DMVRZYNvkb5b25dg7PfvA1cfY8Aml4c69/cV18TKqeQWsIhD+fsvEnCGZimLXMJtUpXhlZAckGxcgJgjlq0fA7GVI3mjgxN00Xb3HoffvzuHWDqfQK4a3AgUNv++Y7tW/Sr03FMTScxR6G2rEyuiJQQDybyhck589psBLzC9aou7yshAJ6EFW2dOHf6OHDthKiBIILrd1XU9x3e0NunX7o8DTNlKicqpELUkaHmKfKeOUyOwwPyUqTSlP/leSnQdYRb1mLkBw5wUgD4yKpR1RMpqdsY7Vm/Wb8yPoOUaYoVCYckwhwnu2LXkUXKxzlAVtSrCW/FXgQ0LRsBnfrhli4CeAuY/mjY+wwlRODBSEltb/T+nk362MQM5V9BkODK5hbh3HEkBHNkmHkrasDJVb+3P8i8a2rfkQWo6fQ5+nTEvr8ZIAdR2R0pqtkQXfdAvz42PgXLTJJzhsbGBvx89iT5t5H9P8Ly/pfcUu15BCoCPnmv+2Rf82VrALdBVHRFiqofjq7p7NcnJ6YoEkk0NDThwk8f0F+Rj7+kdybIEgve+G+//vi3w0hClHdEjGB3tK1jiz41OYnaumW4GKNTePYT2kHwLZ+8CACJ/zqOJUTZqog/0BltXj2g67qB0fN0CF7/rADHcT5EaWvEX9ERbVrRq1/67Qtg7lTBAHIQJSsjemn7IdrtjEID5CCKw4Movvcg5r9+A/I/4WihAHIQxrKNyEykqf8L2Z+FBOAXP0mqyMrJ5sjihQbw3ve2d3eBcxcFYNGvOw7wD+3pqmRMlnYfAAAAAElFTkSuQmCC";
const img_right = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEB0lEQVR42u2Xz28bRRTHv7txfjQBJU7sEjiUCxLiBOKG+AM4cUCqKKpEDwEJSpDqA6pSwaFFFaAKhJC4AxJVAkhN2zQtKWkaTg7GrWtapYQkTcgPNz9sJ7Zjx971zvBmZndtE2oiuioSYqWn+bXzvp95b2a81vAvP9r/AJ562/fOs1j4+BeqMdseMMDjx9LI3zyE5IUJaqV3A+E1APc16PlyauwoMuFvdwPhOcCRN/fjq/6LbHN++AiyE99Qb6oehOcAJ471oGSYGL3yI4tc/TKE7E8D9SA8BujjJ999HYmVTXT69+C7wctsKjpQF8JzgON9PVhMpNCg6/D723B6YJgtTZ65J4QmwrY779zm5ZUmdk5972gPFpaT4IxD1xoIohVf959nydmhEHKRHRAS4PNTb4PZXZxz17coK/3OGJd9bptKxlWb0YCYMz2zCIupd3XNh472VpzuH2S5pUsEEa2BkACffdiLuYUVMIumaGpIOJe3iXBqwxSLZeQKZWyRbW+bKBoWDIPBMC2YZSbnM85IVJPB8jVoZDr2NDfh0e52jI1eZNt3R0LYuu5CSIBPP+jFnfm77uolCFUscraRNbCRKSGTM5HdMkjMXj7UO06o5ExeVa/JGofP10gQflwLj7DS+ihBxCSEBPjkZC9m5pbtsIJWaWA9XUJqs0TixRoBbudD5FhBcNLQZAk7RU4OOa/dIwKi+5FOxCLfM2P9Sgj5+IAEOPX+W5i+syRDu5osYjVdRKFguntCOq4uHeeMV8B4LaA0TYAxd7uJYLS2tVFKOG5GL21h7YuXJMBHxw9jfGIGibUCcnlDrcBeDWcVAemsWszedM5OrY2CAkBVFJqaW7B3bxfikWFurp0Zg5EQEejjh994DSPjtyrhlY6YnWolLMUcUWecVWDcPeHMt3Pvije1IEjit6JD3EyeDcNYDVP3ZQmw/+VXcS0+pXLthrpWVPSJEwGnzx535zhpcTSrxBubmkk8gMnr50n8XBjmuvi1HCP72QXgztFzzrZFx4pxZZbqd/rke0y950ah6q6Yvn3DTYlYeVcwgF9j53g5PUTiSVdcnYJ9fc6VY3tg6vwwiwpLtd2yqq42iht+Z8VPP38IS/Oz9spJPBDA1I2zvLwxvEOczBKZeoLsBbu8v6fjQEgALP4+i8bGFgSCQUzFBpV4ObVDHPY18RBZt13eL0BMAKwklmnlQfwWJ/H0vcUdAO+ejgNcAJRNQ4U9faGuuPcA/lf4k8+8iNnJ0b/ccH8W9x6g8yDXdb3MMiMROmrinF+tJ+49QNfBOeTGf6AbbpNa42TReuLeA7Q+9RwKtx+jWpYs/nfi3gMAD5O1k+XJMnjg/wuUP+e7bVefev+x/4b/4PkDSQkibGffjc4AAAAASUVORK5CYII=";

class Pad {
    constructor(x, y, name) {
        this.x = x;
        this.y = y;
        this.w = 32;
        this.h = 32;
        this.name = name || "Pad"
        this.i_up = loadImage(img_up);
        this.i_down = loadImage(img_down);
        this.i_left = loadImage(img_left);
        this.i_right = loadImage(img_right);
        imageMode(CENTER);
        rectMode(CENTER);
        textAlign(CENTER);
    }
    show() {
        fill(0);
        textSize(12);
        text(this.name,this.x, this.y-20);
        image(this.i_up, this.x, this.y);
        image(this.i_down, this.x, this.y + 42);
        image(this.i_left, this.x - 20, this.y + 20);
        image(this.i_right, this.x + 20, this.y + 20);
    }
    on_click_up(fnc) {
        if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2) {
            if (mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
                noFill();
                rect(this.x, this.y, 25, 30);
            }
        }
        if (mouseIsPressed) {
            if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2) {
                if (mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
                    fnc.apply(this);
                }
            }
        }
    }
    on_click_down(fnc) {
        if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2) {
            if (mouseY > this.y - this.h / 2 + 42 && mouseY < this.y + this.h / 2 + 42) {
                noFill();
                rect(this.x, this.y + 42, 25, 30);
            }
        }
        if (mouseIsPressed) {
            if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2) {
                if (mouseY > this.y - this.h / 2 + 42 && mouseY < this.y + this.h / 2 + 42) {
                    fnc.apply(this);
                }
            }
        }
    }
    on_click_left(fnc) {
        if (mouseX > this.x - this.w / 2 - 20 && mouseX < this.x + this.w / 2 - 20) {
            if (mouseY > this.y - this.h / 2 + 20 && mouseY < this.y + this.h / 2 + 20) {
                noFill();
                rect(this.x - 20, this.y + 20, 30, 25);
            }
        }
        if (mouseIsPressed) {
            if (mouseX > this.x - this.w / 2 - 20 && mouseX < this.x + this.w / 2 - 20) {
                if (mouseY > this.y - this.h / 2 + 20 && mouseY < this.y + this.h / 2 + 20) {
                    fnc.apply(this);
                }
            }
        }
    }
    on_click_right(fnc) {
        if (mouseX > this.x - this.w / 2 + 20 && mouseX < this.x + this.w / 2 + 20) {
            if (mouseY > this.y - this.h / 2 + 20 && mouseY < this.y + this.h / 2 + 20) {
                noFill();
                rect(this.x + 20, this.y + 20, 30, 25);
            }
        }
        if (mouseIsPressed) {
            if (mouseX > this.x - this.w / 2 + 20 && mouseX < this.x + this.w / 2 + 20) {
                if (mouseY > this.y - this.h / 2 + 20 && mouseY < this.y + this.h / 2 + 20) {
                    fnc.apply(this);
                }
            }
        }
    }
}