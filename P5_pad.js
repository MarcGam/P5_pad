const img_down  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE3ElEQVR42rWWa2wUVRTH/ztb2hJp6XMxUeoHrN0+eIhEwUailQiNH5oYP7p+MVqQthINgi/SEDS4RVqx8gaDoH5SsU9apGDF1hDTUkoB+5A+trul7IPtbtt9zMz1zMx2uk2qdBtmds7eO3c38//dc8499+ow1+uxD9jMATZLN9QZ/DydvkfIvPd7rS4SgBNfliBKr1P1GFNEGZt+fqOknADMRfTYQNb7QAGOlZfAdudumCBTW6m79BED3nyHAIbKKmj4FNnVBwpwZH8xbCPTAKIsHIIQGWIWJmLXnq8JYJ82AIf2FWPYNjpDlIVC0Dc4hgWxBnx/5gRg2a8FwE5WaS6G1ToKURIVp9xPgR4YQ2e3A5kZT6Dqx5PAcIU2HjiwtwhDw1JyM/mWGCy2cXTcsmPCx2NFthE1P5EHrAe0Aaj4bCsGLSOq+93eAK7edMDumpRpcgig7uxxAqjUJgRf7FEAWCj5unpc6CP3i6IgxyInOxP1Z48BtoPaAJTt3oqBIassbnf60HbDDr+fV5KRicjOykTDL0epBB3WBmBv6dvoH7TKgjd6XRiweqgvqpadlYXGqiPAnaMaAKTtZJ/u2iIDjHkCaKfY+3wBVVwky8rMwq/Vh4HR49oA7P54C273WzBk86Kn3x0SFsAEQQ6B0ZiNpppDwN2T2gCUfrQZff8M4Toln8M5SQCCAiEorTEzGxdrJYBvtADYwT7ZuRldN/vR8bcDQUq+qdmLchgEZBhz8FvdQcB+ShuAD7cX4kpbD7pv35NdLovLs5daUQZoricAx7daALzPdrxbiOY/b9F+4Jk5e4GXQ5BuXI7L52gzcpzRAGDpdvbetkI0/d5FlW8iTFyaPS+36caV+KOhEnB+pw3AtuK30HCxA97xgOx62f0yiKACtDR8Bbh+mCdA2vZHodM30XC6erySt15p8xFRXFSIuvPtVP2CavwVCKUaPm5cgdbGSuX/OunVHN166kvGueHvex3uS830wxiZOJsHOBhe3RgVZ/z5lYL8mMTEeASDIvwBpdAkJSxCbWM7eJ4PifOqF6QcWJaxEr4JN2nrFON0mPS60H39vE+4d+E0/AM0OVwhGyTjZwOQnhOQsN4Ua8grLyh4mfN6xuHzU8VjkiCjzccFkQ+bvSiodUA9KtGlj4pG6sMGdHfUs6C9+jKCthYalgDayJz/5QHFC0AKFue+FrtkQ1l+fj43MS5B+CGQ8IDFLbdTrp9KRPmUxJQTUpQ+GilLSPxaLeMdtS0IjrTSOy+Q/RUu/n9JSEFDMhavI09sML+0MZ8bG/PA7/PRAcQDPsgr4oKoVkPZ6KOXxFNT0dNZw3hnHYnfaQ3NXBJ3hIvfbxUoEPHrTDGGPHPeiwThdsMy7EQgwM9cASH3c1wUkg2p6L1WzXjXufuKz2UZhiCeMcWkvGBe//wmbmBwFB6PV8mDsNnrSTwpJQW9nXMXnwvANETc06bo5OfMa9Zu4iyWUfgnJ1QAjpZZMon3XKuKSHyuANMQi9aYopNyzSue2sSNjBCEbzIknkzZTuLO+ojEIwEIg1htWpDwrHn56nzObnciPj4Ot9ol8dqIxSMFmIZ46EmCWFu2zJir671xifH26nmJzwcgDGKVCQuzSqm0tiJo7ZiP+HwBpiGAVWRpZP1kHZGKS9e/9mpxTo+GC8MAAAAASUVORK5CYII=";
const img_up    = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAExElEQVR42rWW/1MUZRzH3xt3WsCETWnTN9CU42uR2vRrPzo2MlBNNZNTHMe3HC1RkZF/ImrGGpucGiYdrJwQQhQi8AsdQsdXyZkEBQQJVPCOu4Pb291n+zy7eyfYEXfO7M68b5+73X3er8/7eZ69R8CjHskVr0OwNCAwXoqZ2g76xUtSYu1GeFTz+IQkZ+7ON631Z9tZYKb1INyXa+nKbKwQsQMY5p8U5VufWAN4fCqO19SxwHRLJTx//BArRGwAhnmZI99qEWTIigJLnAW+RQHfnzhDEM0E4YwJInqAJeaCKkGWFaj8d/qwWOKwIMah5mQoieghogMg84TEJGepPd+qsmDYXFW5VO3MIRaDcThZS0nM/BY1xOoAhnlxQZ6VKYa5CgOAzBm1BAGMztY4HeLHn+t1iPnOVSGEaMyLPiZzOQhJUcIVL62eGSD8+5xHpvusuNDWxEQO4e3+XwghGvOgKGoTLmzOqzcMeZtX7/VLGJ/ywe0RsXaNFc8+k4SuDoK421YJn2tFCGEl88TEdc7Cj3I1c4liZ4bzg+j1yhk17nuCGL/tw2JApmuMrjGssVqx4ekkuJyNLDh7sRL+vogQQgTzbWsfT/i9cPeudRvWJ0EMMhp3phk/mRiP4dFJPXam07i9IsbIPCDKyMlOg9/nhaLoEAo9N++ew1BPk6R4Oiuw+Ncp6uYeDy0yAJlDsLZS66lIwVQeKMHE5JReOQGIkoIb4174F4Ja5TnZ6Wg4fZzAZBIVyhT9zKX45+C7sg/S7fPUlRt6mP9JwMIxSG+QMkmJ4XtSqsoryosxdiuUADA148fM7KIeO1X9SlYazv5CAP8cbaQnpkm+JX3PkwZJXaSpUAoPAzzGkyatJ8Uvu55S1Xfgs2KMjk1o1S/QeI9OzBtxUyKKjOysDJyr+4asjxEFmkkjS/pmBtBd4xwxgZWPlCqVA4zcvKWN7dSdBbjnRYJRtPHmysxIR8uZY8Cdb7+gJ2pI/at1GwPAEXX/3mIME4BEY3+TqtdeSpSABkHLNCMjE60NX1ON35kDsG9PEf4eGcOcW8S9ORp7rXo9fg6Qlp6J9savaJ7XmAOwp8yB68NjmJz2IxCQwpUzip/JEmxpWbjUdJRW+wkTAJKPqGWlDgxdu6HNfoWqZooBoElGqi0bHee+BO6fMgegpKQQrt7rmHUv6GPPIWRZGwpG82EzAXQ2E4D7JzMADqsORxGc3dfg94varA+ZK7IOstn2KrpayNtz2gSAlw6rBXYHLl8ZgiRKRuwkSdKToPbLqTn4s/VzeuXUmQFQoX6424GOzkHdmIXMFW0C8u+btryGnrZqswAOqe9/UIjObgNAlh+Y8zYHSN2K3jZKwFtvAsCLh9R33itAt+vq8uhDIKRNtq3oa682C+CgmveuHS7XwPLKjTT4ZNxo247+CzyBBhMAXihXc9+2o6d30DA2qjcg+KrYaNuGgYsc4FczAParb+XZ0d83oK15ngBffqoxIfl7IYUSGOQAPjMAnv9U3ZlXiP7eAT3+pRNR4ZsOhuTU7bh6qdo8gB277PRPSFs0+jfk2zRdHEANb1jNS+C5vaq+zZJoexXUt128zfTq9R0r07s0BQDYQtphnFc7+E7o4R1RxONfEHilTmXmOLoAAAAASUVORK5CYII=";
const img_left  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEg0lEQVR42u2WW2wUVRjH/zO703u3m+1FmtA2Ghd6AywtVquEWChNoJEg0ZSHlReFaMBEU4I+EeMDycZgg4LiJSrBB2M0GDVeQEM0bIkJERvfFBOM9EJpS7vL7szuzBm/c5ndBfShSbu8OJsv58yZOd//d77vm3NWwx2+tP8BFvR249Ba/PXqKPWYsgICcHHNOIPLh7robobseuEAGoe6/EbZadvOBAlgJ41cIPu9IADGPQfWhUKhc0PPPmrsf/kECOAVGv6U7NelB6CVD27rPr+1v9vn9/uxc8/rHOA1ekIkuLi0ACT+yENtI7uf3OSPJywEq8rxxNNHOMAwPf1waQFIfHXr3SPPPzPgj8dN2A5DbagSkb1HCwBA4g3L62MH9m03EjdMOI4Dl4braqqw+4U3qedKc9X7rrqXN8rIrctuHlPDstXkzd+Hw9qt4tWh6tj+53YYyaRcORfgGo3L60QrDG62LySYK/wy3qr3mYvsXG/MzVv1SweplK4c2avli1dWBmP79jxmpC2LxB0loCYLEZccuyg2fLiRzCCZspE0M0hbDsy0A4ssk7FprgvHZjSPkRj9NBc+nwa/X0cRzW1rCePYMUrn+NFhzRMvLQvEntq1zXDsNGzbkdQ02WUsu5p4Io140kaCxFOpNK7NWkJERJjJzdFVUZCD0pjwBAHDr9b2VTjz1bvAxHECIPGS0kBs8PGtBlgGGcdWTgDTsjEbT2OObH7eonqQEeD5dQWVarkIB2FMhZup1DMVRZYNvkb5b25dg7PfvA1cfY8Aml4c69/cV18TKqeQWsIhD+fsvEnCGZimLXMJtUpXhlZAckGxcgJgjlq0fA7GVI3mjgxN00Xb3HoffvzuHWDqfQK4a3AgUNv++Y7tW/Sr03FMTScxR6G2rEyuiJQQDybyhck589psBLzC9aou7yshAJ6EFW2dOHf6OHDthKiBIILrd1XU9x3e0NunX7o8DTNlKicqpELUkaHmKfKeOUyOwwPyUqTSlP/leSnQdYRb1mLkBw5wUgD4yKpR1RMpqdsY7Vm/Wb8yPoOUaYoVCYckwhwnu2LXkUXKxzlAVtSrCW/FXgQ0LRsBnfrhli4CeAuY/mjY+wwlRODBSEltb/T+nk362MQM5V9BkODK5hbh3HEkBHNkmHkrasDJVb+3P8i8a2rfkQWo6fQ5+nTEvr8ZIAdR2R0pqtkQXfdAvz42PgXLTJJzhsbGBvx89iT5t5H9P8Ly/pfcUu15BCoCPnmv+2Rf82VrALdBVHRFiqofjq7p7NcnJ6YoEkk0NDThwk8f0F+Rj7+kdybIEgve+G+//vi3w0hClHdEjGB3tK1jiz41OYnaumW4GKNTePYT2kHwLZ+8CACJ/zqOJUTZqog/0BltXj2g67qB0fN0CF7/rADHcT5EaWvEX9ERbVrRq1/67Qtg7lTBAHIQJSsjemn7IdrtjEID5CCKw4Movvcg5r9+A/I/4WihAHIQxrKNyEykqf8L2Z+FBOAXP0mqyMrJ5sjihQbw3ve2d3eBcxcFYNGvOw7wD+3pqmRMlnYfAAAAAElFTkSuQmCC";
const img_right = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEB0lEQVR42u2Xz28bRRTHv7txfjQBJU7sEjiUCxLiBOKG+AM4cUCqKKpEDwEJSpDqA6pSwaFFFaAKhJC4AxJVAkhN2zQtKWkaTg7GrWtapYQkTcgPNz9sJ7Zjx971zvBmZndtE2oiuioSYqWn+bXzvp95b2a81vAvP9r/AJ562/fOs1j4+BeqMdseMMDjx9LI3zyE5IUJaqV3A+E1APc16PlyauwoMuFvdwPhOcCRN/fjq/6LbHN++AiyE99Qb6oehOcAJ471oGSYGL3yI4tc/TKE7E8D9SA8BujjJ999HYmVTXT69+C7wctsKjpQF8JzgON9PVhMpNCg6/D723B6YJgtTZ65J4QmwrY779zm5ZUmdk5972gPFpaT4IxD1xoIohVf959nydmhEHKRHRAS4PNTb4PZXZxz17coK/3OGJd9bptKxlWb0YCYMz2zCIupd3XNh472VpzuH2S5pUsEEa2BkACffdiLuYUVMIumaGpIOJe3iXBqwxSLZeQKZWyRbW+bKBoWDIPBMC2YZSbnM85IVJPB8jVoZDr2NDfh0e52jI1eZNt3R0LYuu5CSIBPP+jFnfm77uolCFUscraRNbCRKSGTM5HdMkjMXj7UO06o5ExeVa/JGofP10gQflwLj7DS+ihBxCSEBPjkZC9m5pbtsIJWaWA9XUJqs0TixRoBbudD5FhBcNLQZAk7RU4OOa/dIwKi+5FOxCLfM2P9Sgj5+IAEOPX+W5i+syRDu5osYjVdRKFguntCOq4uHeeMV8B4LaA0TYAxd7uJYLS2tVFKOG5GL21h7YuXJMBHxw9jfGIGibUCcnlDrcBeDWcVAemsWszedM5OrY2CAkBVFJqaW7B3bxfikWFurp0Zg5EQEejjh994DSPjtyrhlY6YnWolLMUcUWecVWDcPeHMt3Pvije1IEjit6JD3EyeDcNYDVP3ZQmw/+VXcS0+pXLthrpWVPSJEwGnzx535zhpcTSrxBubmkk8gMnr50n8XBjmuvi1HCP72QXgztFzzrZFx4pxZZbqd/rke0y950ah6q6Yvn3DTYlYeVcwgF9j53g5PUTiSVdcnYJ9fc6VY3tg6vwwiwpLtd2yqq42iht+Z8VPP38IS/Oz9spJPBDA1I2zvLwxvEOczBKZeoLsBbu8v6fjQEgALP4+i8bGFgSCQUzFBpV4ObVDHPY18RBZt13eL0BMAKwklmnlQfwWJ/H0vcUdAO+ejgNcAJRNQ4U9faGuuPcA/lf4k8+8iNnJ0b/ccH8W9x6g8yDXdb3MMiMROmrinF+tJ+49QNfBOeTGf6AbbpNa42TReuLeA7Q+9RwKtx+jWpYs/nfi3gMAD5O1k+XJMnjg/wuUP+e7bVefev+x/4b/4PkDSQkibGffjc4AAAAASUVORK5CYII=";
const img_dOver = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEX7+/sAeAoAcAzb29ue56Si6Keg6KaUlJSB0YiA0IZ90IRwcHDPz8+B4Il5zYBXxWBb1WeR5Jhwy3gkqjFP0lyY5p92zX13zX5YwGIprDshqC5L0Fhmx24ysT9FuVAfqStIzlUAaguJ4pBpyHEaoCkHahJBuU0nrjJAyVAAYQ1HzVcGYBJ43YIYmik9s0k/yE8AWQx03H8wtUIXmCgAXw0AeQsgoy84xEsmjC5s2XcAWA4QbRuyxbS3z7kLfxdYy2Jo03Fu23cTkiQ1t0QqpzsMZxdmeGenp6eSrJQLgRVMwFdEuk5AtkoWlykIbhQ+UUB3d3e5ublSyFxIvVMXmCoNYhc8Tj6No5BPxlk6sUaOqJAKehVKxFYWmCc8TT6Noo9GwFIprTYJcRU7u0ozuEUfpS9GWEibm5sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+gY3FZAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAW1JREFUeNp90mdXwjAUBuC01AWyWkdbRlEigjUobS1ORhEnpeLAgVXB9f//gYkcUaHhfn2fvLk5JwAMhvkZlvEBr2G4iUk8HMexUz5vME1mxs8xgVkq8OMJUgEOQ/5QOMJSQBTnIT4szNHA/AK/yIuSHKMCnufjCZkOohgkZVlJLVHAMp8WBVmGqRUaSKczsgJhjNoQF1cVLLI5CgjGkwIugGsqDYgJBa8wpiEskBXoYD2p4PMQ0UGe5BBtbHoDtqCRBqRnDW+wVZBMUqAXR8B2/6ftkEcihIq7hmHk1L39ATgolSuVSLmK34CQbhU1rVY7rB8d/1acnJbPzjMNsgGyLdu2kdR0Llrgr7i8ajRMAizLtq6lm3ag9W+N29Jd5t4kG/RzZygH4KHzmCfAxTdI6tNIDsBz56ULkWtbSFIdjxx39F5N5Lq6pLY9c9zRe4Mu8rp/sGlPe09Qz3+LZld1xuRY1D/G5gC0PofyL5Q9QHHyqpuKAAAAAElFTkSuQmCC";
const img_uOver = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEX7+/vO5NAahiO0zrbM484SghtYwmGRq5MShxxw0nh804No0XEQhhqNp49xzXkLgRVoyXBvy3dg12pnyG+No5BgzWtmx25gxWhJvFJKzlcKeBVfxGdQv1kxszwgqisosTZBwk4psDQlrTM7vEoJchWSpJQYiCGB4Il42IBw3HtQ01tFxlI4xEswrj4JaBQAeAoAeQtRwFoAagsAYQ0TYB2nsKirq6t9fX1wcHB33oA8t0ZM0FlMTExkZGR+fn7a2trQ0NBGu1AfqSsAaA113X0aoClIxVRCylI0tD9HzVVo2nFEuk4YmikAWQw/yE9m2W8orzMfqC0XmiYAVg0AcwoXmCgSkCU2w0kxwERb1mcVlSYAdQxT0mAATw9xcXEQiyQATQ0YmydIzVguvkEAUQ6UlJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+5aoKcAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAW5JREFUeNp9kGsjwlAYgAstXWTddNORuaQLxzYyJWk5clmhsoYiqf//F5wzl9De3m87z/M+Z5vN9mfsc/O2WbPg4BzOGdy+6HJ7vEvwPuU+t2fZCe+7fLzfBxmU+/x+nk7A0mCcNyfIB70hK85geCUciUSisbjTin/SxGoSraXioSkejLBJcNF1ASFhY3PrN9/m0zuuTDrBcZSjbC6Xyu/uTQy7A2O8j3GacpHuZyVJkmX54HCSKBwpioKPRU4sIoRK0kmZPp8WJkLljA7OiGJVQIJaqpUL7OD/l+JzMZpEqkpisjIFTSFzwQKE1EGheomQSsgVJFzfCAK9Qas3IKEoIEKI1gSFpErfQNPykHB7d88CrXzbWugE2A3ag94FBBxQzYBuQIVHM/AEFp57LKDrutF/sS70WKClvxoDoJAl5K2lw0KnRP+BzoQ+IAy/hHdAkIb1ZrPbNQyoINVkuTEatQd9QKiMle8ZV35OPwBUqVXsA1W9CAAAAABJRU5ErkJggg==";
const img_lOver = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEX7+/vO5NASghsVhx4AeAqrq6va2tojkCyI35EAcAp+fn7Q0NDM485brGKk4qio5qxwcHBFoUyo46yb3KCr57Azlz2g4aWT2ZmR45iJ1pCF04ub4qEAeQsAdgwZiiJ70IF6z4GY5Z+V5JyK4JKP4pYAawuUlJR71oNwy3huyndryHNdwmdRwFpSv1tFt1BAsUs5sEUxskIzq0Exqz06rkVr1nhu0XZnyG9hyGpixWpaw2NIu1E8tkYfqSsiqDIboSgfojEcoiwYmSlByFEAYQ1hzWpcyGVBuUszsD8gqS0HYhFMwVYosDQhrC0krDEYmCcXligXmChCyVK0zrY3uUYUkCQTiyU+xk6Rq5MPgxtMx1YptDQXlSg5wksAWAyNpo8LfxdDw1AUjiY8xEw2wEgzvUg1v0cIeBQ8vUsHXRQAUgsAVQwATwySoZMJchNMTExkZGRxcXGNo5AIahPPz88trD6NoY8knTaNno4IVxQTVhynr6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////jSBpEAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAZJJREFUeNrNkldXwjAYhlMEZTjqxlERUcSKozhBSyBVtAyto3VBXbiqOHH/eb+2Hr2i3Hl80iQX7/NlnAahP4Wqltuq5DV2R61VXud0uT2V8/qGxiY7XVmgmlta2ywEqr2js7OxskDVebu6unvsOr1Mr8vuYhjGxeijcWyqz+nz9fv8fr93oMdrEBgMOIHAUNC433B/CBhh2RA7Gh4bn5jkIlORyPT0xMwQDee3zbJz7Hw0Go0tLHJ8HPM4gZMkSQjBwhIN+fJ8KhYLr6zGRZHnMU5iTDAxEdI06sukwuHMZDa3JopiUkxgyMk6kQCysQkrbNmWM9vZnJgzyrFRK0kyNEWSd0BAu3v7Bzl9dT7xHcuyrCiKrOTlggoCOjw6zvIib24t/cTQT0wBjNM4lAuCUACKwBm04nmhuGMK6PCiEMfk8kpVtWvg5lrTUTVVXTIFVLrdTuTP1Lt7+uFB/34Jfv+NxyeOcNq9w1Mue6CXPTAZ/DyhUvqZ0yzeA0IvV6/WAnp7ryKg0ofbWkCfDvQ/+QL8QmM/hRUWMwAAAABJRU5ErkJggg==";
const img_rOver = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEX////O5NASghu0yrUAeQsQgRmWrZdwzXgThByUq5aC24p71oM5mEGSqpQAeAqE3IxrzHV91YQqkDKB2ohkx2xnyW941H4fiigAdwp92YRfxWdexGZgx2px0XkXhCCV5ZuT5ZqS5JmR5JiQ5JeO5JWN5JSM45SL4pKJ4pCI4pCH4Y6G4Y2E4YyD4YuB34mA34hbwmRYwWBXwGBZxGJpznEQfxmTqZVwzHhvy3huy3Vuy3dtynZrynNpyHFoyHBnyG9fxGdSwFtGvFA9t0c1tD8vsjoprzQkrS8irC8gqisiqzAiqy0mrDEqrjcztEBMw1YMexWTqJRtynVsynRqyXJpyXJmx25VwV5Euk41tUAnrzIhrS0hrC0hqywgqywgqi4fqSsfqC0epywepis7vEgKdxWTp5RpyXFoyXBbw2IztT4irS0fqS0dpSsdpCocoyogqC44ukUJdBOTp5WL45Naw2NCu00sszciri4coiwboigboSsboCoanyoaoCklqzQuqjwNaRi7u7tJvlMvtDoanikZnSgZnCgfpC41t0QHbRNEV0Wbm5tq23Qjry8iry4ZnigYnCcYmykXmigXmiYXmSgdoS8ytEEHaBQ7TDxzc3O5ublV1WAYmycWmCcWlycbniwwskEHZRM7SzxycnK0tLRU1WFT1GBR01xQ01tO0VtM0FlKz1dIzldGzVNEy1RCylJByVE/yE8+yE49x088xk47xk06xUwVlSYUlCUanC0tsD4GYhI7SjwAdQoAdAoAcgwAcQwAbgsAawsAaQ0AZgwAZAwAYg4AXw0AXQ0AXA0AWw0AWgwAWQwAWA4wtkIUkycZmywsrz0GYBPb29uUlJRwcHAAVw4wtUITkiQYmiwGXxM7STzPz88rrz0GXxIopTkHXxMhbytmdWd1dXW1tbXH0MesrKy6uroAAAAAAAAAAAAAAAAAAAAAAAAAAggAAABTjGxTjGwAAfgAAAEAAAAAAAAAAAAAAAAAAABTjJBTjJAAAdQAAABTjKBTjKCrJhp9AAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAAbpJREFUeNpjYBgQwEhIARMzAQUsrGwEFLBzcOJXwMXNw4tPAR+/gKAQPhV8wiKiYuIwFSxwwMfCx8cnAQKSUtIysnJQFSzyCgqKSkrKKiqqauoamlraOrp6+gaGRsYmpmYQBYrmFpZW1ja2dvYOjk7OLq5u7h6eXt4+vn7+AYFgBcqWQcEhoWHhEZFR0TGxcZ7xCYmJSUCQ7JWSmgZSoBKSnpHplJWdDZLNSUxKTErOzc3LB4KCwqJioIKSsNKy8oqK6Ji4+ByQZF5+ZVV1TXVtbV1NfUNjEwOLRnNLRUU2SBokW1lVU1Pb2tbe1t7e3tHZ1d3DwNfb118RHRsXn5icm19VUzuhrX3ipMlTpk6dOm36jJmzZjPwzQEZ75mYlJsHlG6bO2ny1Hnz5s2fP3/BwkWLlywFBtucZctXrFy1es3ades3bNy0ecvWrdu279ixc9fuPXtB8gx8Evv2Hzh46PCRo8eOnzh56vSZs+fOnb9w4eKlyxB5hitXr6GD6zdu3rp0+w5EHqjiLjq4fuPWvftweSzg+o1Ll/HJM5x7AHUfLnDm4eJZ+OQZHj1+8hRvmnz2/AXDoAIADYnKTHyr9GsAAAAASUVORK5CYII=";

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

        this.i_dOver = loadImage(img_dOver);
        this.i_uOver = loadImage(img_uOver);
        this.i_lOver = loadImage(img_lOver);
        this.i_rOver = loadImage(img_rOver);

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
                image(this.i_uOver, this.x, this.y);
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
                image(this.i_dOver, this.x, this.y+42);
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
                image(this.i_lOver, this.x - 20, this.y + 20);
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
                image(this.i_rOver, this.x +20, this.y+20);
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
