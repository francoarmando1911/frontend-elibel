import Link from "next/link";
import { Separator } from "./ui/separator";

const dataFooter = [
    { id: 1, name: "Sobre nosotros", link: "#" },
    { id: 2, name: "Productos", link: "#" },
    { id: 3, name: "Mi cuenta", link: "#" },
    { id: 4, name: "Política de privacidad", link: "#" },
];

const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col sm:flex-row sm:justify-between items-center">
                    <p className="font-bold">Elibel <span className="font-normal">E-commerce</span></p>

                    <ul className="flex flex-wrap justify-center sm:justify-start items-center mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                        {dataFooter.map((data) => (
                            <li key={data.id} className="mr-4 md:mr-6">
                                <Link href={data.link} className="hover:underline">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <span className="block text-sm text-gray-500 text-center sm:text-left dark:text-gray-400">
                    &copy; 2025 Intra Software. <Link href="#" className="hover:underline">Intra Software</Link>. Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
