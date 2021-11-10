import Header from "./header";

export function MainLayout({ children }) {
    return (
        <div className="container">
            <Header />
            {children}
        </div>
    );
}
