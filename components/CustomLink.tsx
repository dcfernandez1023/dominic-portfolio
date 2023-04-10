type CustomLinkProps = {
    link: string;
    display: string;
    withUnderline?: boolean;
};

export default function CustomLink({ link, display, withUnderline }: CustomLinkProps) {
    return (
        <a 
            href={link} 
            target="_blank"
            style={{ color: "#64ffda", opacity: "1.0", textDecoration: withUnderline ? "underline" : "none" }}
        >
            {display}
        </a>
    );
}