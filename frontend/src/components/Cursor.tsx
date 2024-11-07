import React from 'react';
import { CursorPosition, CursorType } from '@/types';
import { cn } from '@/lib/utils';

interface CursorProps {
     type?: CursorType
     position: CursorPosition
     isLocal?: boolean
}

const Cursor: React.FC<CursorProps> = ({ position, isLocal = false, type = "default" }) => {
     const cursorColor = isLocal ? "fill-[#EA580C]" : "fill-[#c2410c]";
     const borderColor = isLocal ? "#CC4D0A" : "#9a3412";

     return (
          <div
               className={cn(
                    'absolute pointer-events-none z-[1000]',
                    isLocal && 'transition-all duration-100 ease-out'
               )}
               style={{ left: position.x, top: position.y }}>

               {type === "default" && (
                    <div className="flex flex-row gap-x-[10px] items-center">
                         {!isLocal && (
                              <div>//</div>
                         )}

                         <svg viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[25px] h-[31px]">
                              <path
                                   d="M4.53067 2.31577L4.52779 2.31712C3.9232 2.59995 3.42491 3.05995 3.09276 3.62393C2.75732 4.19351 2.6021 4.85128 2.6475 5.51074L2.64756 5.51157L5.10181 40.9385L5.10196 40.9407C5.14663 41.5756 5.37537 42.1838 5.7602 42.6908C6.14503 43.1978 6.66927 43.5816 7.26881 43.7954C7.86835 44.0092 8.51719 44.0436 9.13598 43.8945C9.75476 43.7453 10.3167 43.4191 10.753 42.9557L10.755 42.9535L19.2563 33.8969L31.6512 33.2077C31.6523 33.2076 31.6534 33.2076 31.6544 33.2075C32.2903 33.1728 32.9023 32.9535 33.4154 32.5763C33.9294 32.1985 34.3219 31.6789 34.5446 31.0811C34.7674 30.4833 34.8107 29.8335 34.6693 29.2115C34.5278 28.5895 34.2078 28.0223 33.7485 27.5796L8.18951 2.92958C8.18935 2.92942 8.18919 2.92927 8.18903 2.92912C7.71285 2.46904 7.10839 2.16413 6.4554 2.05458C5.80217 1.945 5.13107 2.03607 4.53067 2.31577Z"
                                   stroke={borderColor}
                                   strokeWidth="4"
                                   strokeMiterlimit="16"
                                   strokeLinejoin="round"
                                   className={cursorColor}
                              />
                         </svg>
                    </div>
               )}

               {type === "pointer" && (
                    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[29px] h-[29px]">
                         <path
                              d="M10.7616 34.072C10.5563 33.9481 10.375 33.7883 10.2263 33.6003C9.7944 33.054 9.38334 32.3504 8.99589 31.6873C8.96029 31.6263 8.92488 31.5657 8.88968 31.5056C8.44113 30.7398 7.93105 29.881 7.25507 28.9192C7.23643 28.8927 7.21845 28.8657 7.20112 28.8383C6.93619 28.4195 6.32101 27.6788 5.56947 26.8174C5.38044 26.6008 5.18165 26.3753 4.98454 26.1517C4.47808 25.5771 3.98275 25.0152 3.69281 24.6485C3.61671 24.5523 3.54963 24.4492 3.49241 24.3407C3.19073 23.7684 2.93924 23.154 2.87612 22.4355C2.81742 21.7674 2.93839 21.1735 3.06682 20.6755C3.54808 18.2283 5.94951 16.5879 8.4074 16.5879C9.4997 16.5879 10.4538 16.9951 11.1547 17.38C11.3324 17.4776 11.5073 17.5817 11.6766 17.6878C11.6711 17.6727 11.6653 17.6572 11.6595 17.6413C11.5659 17.3868 11.4307 17.0191 11.313 16.5728C11.3046 16.5407 11.2969 16.5083 11.29 16.4757C11.1804 15.9559 11.0711 15.5402 10.9501 15.0809L10.9471 15.0697C10.834 14.6407 10.7108 14.1731 10.5872 13.6004C10.4248 13.0804 10.2926 12.3592 10.1936 11.8193L10.1909 11.8045C10.1779 11.7334 10.1651 11.6636 10.1526 11.5952C10.04 10.9795 9.94751 10.4736 9.86116 10.146C9.85269 10.1138 9.84501 10.0814 9.83815 10.0489C9.67558 9.27783 9.60029 8.25625 9.71796 7.25171C9.82829 6.30983 10.1534 4.99395 11.1447 4.05365C11.8816 3.35464 12.8451 2.99593 13.707 2.86685C14.5763 2.73665 15.6007 2.80072 16.5238 3.23857C16.5688 3.25987 16.6129 3.28284 16.6561 3.30743C17.6642 3.88121 18.3617 4.7614 18.8089 5.46843C19.25 6.16566 19.5461 6.85206 19.7101 7.30634C20.2189 8.5261 20.7084 10.1454 20.984 11.9804C21.1228 11.9268 21.2684 11.8798 21.4211 11.8405C22.4224 11.5369 23.3885 11.5377 24.0553 11.5382C24.0828 11.5382 24.1097 11.5383 24.1361 11.5383C24.3407 11.5383 24.544 11.5697 24.7391 11.6313C25.6437 11.9174 26.5057 12.4277 27.164 12.9812C27.2767 12.9038 27.3866 12.8343 27.4884 12.7728C27.908 12.5196 28.3461 12.3119 28.5836 12.1993L28.6026 12.1903C28.6849 12.1512 28.7698 12.1179 28.8567 12.0904C29.9019 11.7599 31.1836 11.7383 32.2598 12.0256C32.6227 12.0787 32.9256 12.1958 33.1216 12.2823C33.4226 12.4151 33.7065 12.5828 33.9528 12.7527C34.3413 13.0208 34.9196 13.4893 35.278 14.0968C35.4181 14.3148 35.5283 14.547 35.6156 14.7662C36.399 14.4505 37.2624 14.328 38.0667 14.4205C38.951 14.5222 39.8901 14.8936 40.6327 15.6779C41.3784 16.4653 41.7717 17.5056 41.8592 18.6673C41.8629 18.7173 41.8648 18.7674 41.8648 18.8175V18.8269V18.8362V18.8455V18.8548V18.864V18.8732V18.8824V18.8915V18.9005V18.9095V18.9185V18.9275V18.9364V18.9452V18.954V18.9628V18.9716V18.9803V18.9889V18.9976V19.0061V19.0147V19.0232V19.0317V19.0401V19.0485V19.0568V19.0651V19.0734V19.0816V19.0898V19.098V19.1061V19.1142V19.1223V19.1303V19.1383V19.1462V19.1541V19.162V19.1698V19.1776V19.1853V19.1931V19.2008V19.2084V19.216V19.2236V19.2311V19.2387V19.2461V19.2536V19.261V19.2683V19.2757V19.283V19.2903V19.2975V19.3047V19.3119V19.319V19.3261V19.3332V19.3402V19.3472V19.3542V19.3611V19.368V19.3749V19.3817V19.3885V19.3953V19.4021V19.4088V19.4155V19.4221V19.4287V19.4353V19.4419V19.4484V19.4549V19.4614V19.4678V19.4742V19.4806V19.4869V19.4932V19.4995V19.5058V19.512V19.5182V19.5244V19.5305V19.5366V19.5427V19.5488V19.5548V19.5608V19.5668V19.5727V19.5786V19.5845V19.5904V19.5962V19.602V19.6078V19.6136V19.6193V19.625V19.6307V19.6363V19.6419V19.6475V19.6531V19.6586V19.6642V19.6696V19.6751V19.6806V19.686V19.6914V19.6967V19.7021V19.7074V19.7127V19.718V19.7232V19.7284V19.7336V19.7388V19.744V19.7491V19.7542V19.7593V19.7643V19.7694V19.7744V19.7794V19.7844V19.7893V19.7942V19.7991V19.804V19.8089V19.8137V19.8185V19.8233V19.8281V19.8329V19.8376V19.8423V19.847V19.8517V19.8564V19.861V19.8656V19.8702V19.8748V19.8793V19.8839V19.8884V19.8929V19.8974V19.9018V19.9063V19.9107V19.9151V19.9195V19.9239V19.9282V19.9326V19.9369V19.9412V19.9455V19.9497V19.954V19.9582V19.9624V19.9667V19.9708V19.975V19.9792V19.9833V19.9874V19.9915V19.9956V19.9997V20.0037V20.0078V20.0118V20.0158V20.0198V20.0238V20.0278V20.0317V20.0357V20.0396V20.0435V20.0474V20.0513V20.0552V20.0591V20.0629V20.0667V20.0706V20.0744V20.0782V20.082V20.0857V20.0895V20.0932V20.097V20.1007V20.1044V20.1081V20.1118V20.1155V20.1192V20.1228V20.1265V20.1301V20.1338V20.1374V20.141V20.1446V20.1482V20.1518V20.1553V20.1589V20.1624V20.166V20.1695V20.173V20.1766V20.1801V20.1836V20.1871V20.1905V20.194V20.1975V20.2009V20.2044V20.2078V20.2113V20.2147V20.2181V20.2216V20.225V20.2284V20.2318V20.2352V20.2386V20.2419V20.2453V20.2487V20.252V20.2554V20.2588V20.2621V20.2655V20.2688V20.2721V20.2755V20.2788V20.2821V20.2854V20.2887V20.2921V20.2954V20.2987V20.302V20.3053V20.3086V20.3119V20.3151V20.3184V20.3217V20.325V20.3283V20.3316V20.3348V20.3381V20.3414V20.3447V20.3479V20.3512V20.3545V20.3577V20.361V20.3643V20.3675V20.3708V20.3741V20.3773V20.3806V20.3839V20.3871V20.3904V20.3937V20.3969V20.4002V20.4035V20.4068V20.41V20.4133V20.4166V20.4199V20.4232V20.4264V20.4297V20.433V20.4363V20.4396V20.4429V20.4462V20.4495V20.4528V20.4561V20.4594V20.4628V20.4661V20.4694V20.4727V20.4761V20.4794V20.4827V20.4861V20.4895V20.4928V20.4962V20.4995V20.5029V20.5063V20.5097V20.5131V20.5165V20.5199V20.5233V20.5267V20.5301V20.5336V20.537V20.5405V20.5439V20.5474V20.5508V20.5543V20.5578V20.5613V20.5648V20.5683V20.5718V20.5753V20.5789V20.5824V20.5859V20.5895V20.5931V20.5967V20.6002V20.6038V20.6075V20.6111V20.6147V20.6183V20.622V20.6256V20.6293V20.633V20.6367V20.6404V20.6441V20.6478V20.6516V20.6553V20.6591V20.6628V20.6666V20.6704V20.6742V20.6781V20.6819V20.6857V20.6896V20.6935V20.6974V20.7013V20.7052V20.7091V20.713V20.717V20.721V20.7249V20.7289V20.733V20.737V20.741V20.7451V20.7492V20.7532V20.7573V20.7615V20.7656V20.7697V20.7739V20.7781V20.7823V20.7865V20.7907V20.795V20.7992V20.8035V20.8078V20.8121V20.8165V20.8208V20.8252V20.8296V20.834V20.8384V20.8429V20.8473V20.8518V20.8563V20.8608V20.8653V20.8699V20.8745V20.8791V20.8837V20.8883V20.893V20.8976V20.9023V20.907V20.9118V20.9165V20.9213V20.9261V20.9309V20.9358V20.9406V20.9455V20.9504V20.9553V20.9603V20.9652V20.9702V20.9752V20.9803V20.9853V20.9904V20.9955V21.0006V21.0058V21.011V21.0162V21.0214V21.0266V21.0319V21.0372V21.0425V21.0478V21.0532V21.0586V21.064V21.0695V21.0749V21.0804V21.0859V21.0915V21.097V21.1026V21.1082V21.1139V21.1195V21.1252V21.131V21.1367V21.1425V21.1483V21.1541V21.16V21.1659V21.1718V21.1777V21.1837V21.1897V21.1957V21.2018V21.2078V21.2139V21.2201V21.2262V21.2324V21.2387V21.2449V21.2512V21.2575V21.2639V21.2702V21.2766V21.2831V21.2895V21.296V21.3025V21.3091V21.3157V21.3223V21.3289V21.3356V21.3423V21.349V21.3557V21.3624V21.3691V21.3758V21.3825V21.3891V21.3958V21.4024V21.409V21.4157V21.4223V21.4289V21.4354V21.442V21.4486V21.4551V21.4617V21.4682V21.4748V21.4813V21.4878V21.4943V21.5008V21.5072V21.5137V21.5202V21.5266V21.533V21.5395V21.5459V21.5523V21.5587V21.5651V21.5715V21.5778V21.5842V21.5905V21.5969V21.6032V21.6095V21.6159V21.6222V21.6285V21.6348V21.641V21.6473V21.6536V21.6598V21.6661V21.6723V21.6785V21.6847V21.6909V21.6971V21.7033V21.7095V21.7157V21.7218V21.728V21.7341V21.7403V21.7464V21.7525V21.7586V21.7647V21.7708V21.7769V21.783V21.7891V21.7951V21.8012V21.8072V21.8132V21.8193V21.8253V21.8313V21.8373V21.8433V21.8493V21.8553V21.8612V21.8672V21.8732V21.8791V21.885V21.891V21.8969V21.9028V21.9087V21.9146V21.9205V21.9264V21.9323V21.9381V21.944V21.9499V21.9557V21.9615V21.9674V21.9732V21.979V21.9848V21.9906V21.9964V22.0022V22.008V22.0138V22.0195V22.0253V22.031V22.0368V22.0425V22.0482V22.054V22.0597V22.0654V22.0711V22.0768V22.0825V22.0882V22.0938V22.0995V22.1052V22.1108V22.1165V22.1221V22.1277V22.1334V22.139V22.1446V22.1502V22.1558V22.1614V22.167V22.1726V22.1782V22.1837V22.1893V22.1949V22.2004V22.206V22.2115V22.217V22.2226V22.2281V22.2336V22.2391V22.2446V22.2501V22.2556V22.2611V22.2666V22.272V22.2775V22.283V22.2884V22.2939V22.2993V22.3048V22.3102V22.3156V22.3211V22.3265V22.3319V22.3373V22.3427V22.3481V22.3535V22.3589V22.3643V22.3696V22.375V22.3804V22.3857V22.3911V22.3964V22.4018V22.4071V22.4124V22.4178V22.4231V22.4284V22.4337V22.439V22.4443V22.4496V22.4549V22.4602V22.4655V22.4708V22.4761V22.4813V22.4866V22.4919V22.4971V22.5024V22.5076V22.5129V22.5181V22.5234V22.5286V22.5338V22.539V22.5443V22.5495V22.5547V22.5599V22.5651V22.5703V22.5755V22.5807V22.5859V22.5911V22.5962V22.6014V22.6066V22.6118V22.6169V22.6221V22.6272V22.6324V22.6375V22.6427V22.6478V22.653V22.6581V22.6632V22.6683V22.6735V22.6786V22.6837V22.6888V22.6939V22.699V22.7041V22.7092V22.7143V22.7194V22.7245V22.7296V22.7347V22.7398V22.7449V22.7499V22.755V22.7601V22.7651V22.7702V22.7753V22.7803V22.7854V22.7904V22.7955V22.8005V22.8056V22.8106V22.8157V22.8207V22.8257V22.8308V22.8358V22.8408V22.8458V22.8509V22.8559V22.8609V22.8659V22.8709V22.8759V22.881V22.886V22.891V22.896V22.901V22.906V22.911V22.916V22.9209V22.9259V22.9309V22.9359V22.9409V22.9459V22.9509V22.9558V22.9608V22.9658V22.9708V22.9757V22.9807V22.9857V22.9906V22.9956V23.0006V23.0055V23.0105V23.0155V23.0204V23.0254V23.0303V23.0353V23.0402V23.0452V23.0502V23.0551V23.0601V23.065V23.07V23.0749V23.0798V23.0848V23.0897V23.0947V23.0996V23.1046V23.1095V23.1144V23.1194V23.1243V23.1293V23.1342V23.1391V23.1441V23.149V23.1539V23.1589V23.1638V23.1687V23.1737V23.1786V23.1835V23.1885V23.1934V23.1983V23.2033V23.2082V23.2131V23.2181V23.223V23.2279V23.2329V23.2378V23.2427V23.2477V23.2526V23.2575V23.2624V23.2674V23.2723V23.2772V23.2822V23.2871V23.292V23.297V23.3019V23.3068V23.3118V23.3167V23.3217V23.3266V23.3315V23.3365V23.3414V23.3463V23.3513V23.3562V23.3612V23.3661V23.3711V23.376V23.3809V23.3859V23.3908V23.3958V23.4007V23.4057V23.4106V23.4156V23.4205V23.4255V23.4305V23.4354V23.4404V23.4453V23.4503V23.4553V23.4602V23.4652V23.4702V23.4751V23.4801V23.4851V23.49V23.495V23.5V23.505V23.5099V23.5149V23.5199V23.5249V23.5299V23.5349V23.5399V23.5449V23.5499V23.5548V23.5598V23.5648V23.5698V23.5749V23.5799V23.5849V23.5899V23.5949V23.5999V23.6049V23.61V23.615V23.62V23.625V23.6301V23.6351V23.6401V23.6452V23.6502V23.6552V23.6603V23.6653V23.6704V23.6754V23.6805V23.6856V23.6906V23.6957V23.7008V23.7058V23.7109V23.716V23.7211V23.7261V23.7312V23.7363V23.7414V23.7465V23.7516V23.7567V23.7618V23.7669V23.772V23.7771V23.7823V23.7874V23.7925V23.7976V23.8028V23.8079V23.813V23.8182V23.8233V23.8285V23.8336V23.8388V23.844V23.8491V23.8543V23.8595V23.8646V23.8698V23.875V23.8802V23.8854V23.8906V23.8958V23.901V23.9062V23.9114V23.9166V23.9218V23.9271V23.9323V23.9375V23.9428V23.948V23.9533V23.9585V23.9638V23.969V23.9743V23.9796V23.9848V23.9901V23.9954V24.0007V24.006V24.0113V24.0166V24.0219V24.0272V24.0325V24.0378V24.0431V24.0485V24.0538V24.0592V24.0645V24.0699V24.0752V24.0806V24.0859V24.0913V24.0967C41.8648 25.1652 41.6058 27.4043 41.3148 28.5084C41.3012 28.5602 41.2855 28.6113 41.2677 28.6618C40.9906 29.4505 40.1757 31.2892 39.2558 32.4526C39.2149 32.5043 39.1715 32.554 39.1257 32.6014C39.1257 32.6015 39.1256 32.6015 39.1256 32.6016C39.1255 32.6016 39.1255 32.6017 39.1254 32.6017C39.1253 32.6018 39.1253 32.6019 39.1252 32.602L39.1221 32.6052L39.1046 32.6235C39.0883 32.6406 39.063 32.6672 39.03 32.7023C38.964 32.7727 38.8673 32.8767 38.7498 33.0065C38.5132 33.2677 38.1989 33.6257 37.8813 34.0187C37.5593 34.4171 37.2579 34.8219 37.0331 35.1802C36.8508 35.4707 36.7813 35.6337 36.7597 35.6843C36.7507 35.7055 36.75 35.707 36.7531 35.6898C36.6261 36.4123 36.5817 36.6723 36.5605 36.8732C36.5432 37.0366 36.5413 37.1577 36.5413 37.639C36.5413 37.9505 36.5849 38.3526 36.6399 38.7183C36.6661 38.8922 36.6923 39.0412 36.7117 39.1453C36.7213 39.1971 36.7291 39.237 36.7342 39.2625L36.7396 39.2893L36.7402 39.2922C36.7402 39.2923 36.7402 39.2924 36.7403 39.2925M10.7616 34.072L32.7655 39.8024C32.7702 39.8287 32.7748 39.8536 32.7792 39.8769C32.7922 39.9471 32.8033 40.004 32.8115 40.0449L32.8214 40.094L32.8245 40.109L32.8256 40.1141L32.8259 40.116L32.8261 40.1167L32.8262 40.1171C32.8262 40.1172 32.8263 40.1174 34.7832 39.7048M10.7616 34.072L13.2378 35.5667L13.3735 35.6955L13.4525 35.7705L13.5335 35.8473L13.6162 35.9257L13.6267 35.9357L13.6319 35.9406L13.6372 35.9456L13.6582 35.9656L13.7006 36.0057L13.7863 36.0871L13.8297 36.1282L13.8733 36.1696L13.9172 36.2112L13.9614 36.2531L13.9669 36.2584L13.9725 36.2636L13.9835 36.2741L14.0057 36.2952L14.028 36.3163L14.0336 36.3216L14.0392 36.3269L14.0447 36.3322L14.0503 36.3375L14.0951 36.3799L14.14 36.4225L14.1625 36.4439L14.185 36.4652L14.2076 36.4866L14.2132 36.492L14.2189 36.4973L14.2245 36.5027L14.2301 36.5081L14.4114 36.68L14.5021 36.766L14.5474 36.809L14.5926 36.8519L14.6039 36.8626L14.6152 36.8733L14.6378 36.8947L14.6603 36.9161L14.6828 36.9374L14.7277 36.98C14.8202 37.0678 14.68 36.9348 14.7725 37.0225L14.8614 37.1068L14.9056 37.1487L14.9276 37.1696L14.9495 37.1904L14.9931 37.2318L15.0148 37.2524L15.0365 37.2729L15.0795 37.3137L15.1009 37.334L15.1222 37.3542L15.1328 37.3643L15.1381 37.3693L15.1434 37.3744L15.154 37.3844L15.1646 37.3944L15.1856 37.4144L15.1961 37.4243L15.2013 37.4293L15.2065 37.4342L15.2893 37.5127L15.3097 37.5321L15.33 37.5513L15.3401 37.5609L15.3451 37.5657L15.3502 37.5705L15.3602 37.58L15.3703 37.5895L15.41 37.6272L15.4149 37.6319L15.4199 37.6366L15.4297 37.6459L15.4395 37.6552L15.4444 37.6598L15.4493 37.6645L15.4687 37.6829L15.4854 37.6987C15.4883 37.7015 15.4998 37.7124 15.5262 37.7374L15.6007 37.8081L15.6053 37.8125L15.6099 37.8168L15.619 37.8255L15.6371 37.8426L15.6619 37.8661C15.664 37.8733 15.6663 37.8814 15.6687 37.8905C15.7008 38.0122 15.7236 38.2002 15.7236 38.4424C15.7236 38.6754 15.7027 38.9002 15.6803 39.0705C15.6693 39.1535 15.6588 39.2183 15.6517 39.2583C15.6503 39.2664 15.649 39.2734 15.6479 39.2793C15.6464 39.2878 15.6452 39.2939 15.6445 39.2975C15.6443 39.2986 15.6441 39.2995 15.644 39.3001C15.5226 39.8875 15.6713 40.4986 16.0494 40.9647C16.4291 41.4329 16.9998 41.7048 17.6026 41.7048C18.3745 41.7048 19.2272 41.7284 20.1203 41.7532C20.5985 41.7664 21.0883 41.78 21.5834 41.7904C22.8747 41.8176 24.2503 41.8253 25.2682 41.7002C25.9711 41.6605 26.549 41.3738 26.9403 41.1227C27.3821 40.8392 27.7653 40.4855 28.0758 40.1542C28.2539 39.9641 28.4243 39.7639 28.5842 39.5607M10.7616 34.072L28.5842 39.5607M36.7403 39.2925C36.7402 39.2923 36.7402 39.2922 34.7832 39.7048M36.7403 39.2925C36.856 39.8419 36.7355 40.4147 36.4081 40.8709C36.0806 41.3272 35.5764 41.6247 35.0187 41.6909L34.7832 39.7048M36.7403 39.2925L28.5842 39.5607M34.7832 39.7048C35.0187 41.6909 35.0185 41.6909 35.0184 41.6909L35.0179 41.691L35.017 41.6911L35.0146 41.6914L35.0076 41.6922L34.9853 41.6947L34.9096 41.703C34.846 41.7098 34.7566 41.7188 34.6473 41.7288C34.4299 41.7486 34.1277 41.7726 33.7891 41.7886C33.1885 41.8171 32.206 41.8377 31.418 41.6508C30.7921 41.5024 30.2763 41.1774 29.9124 40.8991C29.5279 40.6052 29.1832 40.2628 28.8948 39.9345C28.7911 39.8165 28.6868 39.6911 28.5842 39.5607M15.6456 37.8203C15.6457 37.8202 15.6464 37.8217 15.6478 37.825C15.6462 37.822 15.6456 37.8203 15.6456 37.8203Z"
                              fill="#FFB58F"
                              stroke="#CC4D0A"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                         />
                    </svg>
               )}

          </div>
     );
};

export default Cursor;
