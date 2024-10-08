import Footer from "@/components/footer";
import Header from "@/components/header";

export default async function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {

    return (
        <div>
            <Header />
            {children}
        </div>
    );
}