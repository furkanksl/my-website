import Image from "next/image";

function BlurryBubbles({ count }: { count?: number }) {
    return (
        <>
            {(count ? count > 0 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={500}
                    height={217}
                    alt="blurry-bubble"
                    className="max-w-[500px] !max-h-[217px] object-cover blur-[200px] absolute top-[1%] -right-[140px] z-0"
                />
            )}

            {(count ? count > 1 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={500}
                    height={317}
                    alt="blurry-bubble"
                    className="max-w-[500px] !max-h-[317px] object-cover blur-[200px] absolute top-[15%] -left-[140px] z-0"
                />
            )}

            {(count ? count > 2 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={500}
                    height={217}
                    alt="blurry-bubble"
                    className="max-w-[400px] -rotate-45 !max-h-[117px] object-cover blur-[200px] absolute top-[25%] -right-[140px] z-0"
                />
            )}

            {(count ? count > 3 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={500}
                    height={417}
                    alt="blurry-bubble"
                    className="max-w-[500px] !max-h-[417px] object-cover blur-[200px] absolute top-[40%] -left-[140px] z-0"
                />
            )}

            {(count ? count > 4 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={500}
                    height={217}
                    alt="blurry-bubble"
                    className="max-w-[500px] !max-h-[217px] object-cover blur-[200px] absolute top-[50%] -right-[140px] z-0"
                />
            )}

            {(count ? count > 5 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={500}
                    height={217}
                    alt="blurry-bubble"
                    className="max-w-[500px] !max-h-[217px] object-cover blur-[200px] absolute top-[60%] -left-[140px] z-0"
                />
            )}
            {(count ? count > 6 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={500}
                    height={217}
                    alt="blurry-bubble"
                    className="max-w-[500px] !max-h-[217px] object-cover blur-[200px] absolute top-[70%] -right-[140px] z-0"
                />
            )}

            {(count ? count > 7 : true) && (
                <Image
                    src="/blurry-bubble.svg"
                    width={300}
                    height={117}
                    alt="blurry-bubble"
                    className="max-w-[300px] !max-h-[117px] object-cover blur-[200px] absolute top-[80%] -left-[140px] z-0"
                />
            )}
        </>
    );
}

export default BlurryBubbles;
