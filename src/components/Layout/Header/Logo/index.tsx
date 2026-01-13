import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}images/logo/logocompleto.png`}
        alt="logo"
        width={180}
        height={180}
        style={{ width: 180, height: 180 }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
