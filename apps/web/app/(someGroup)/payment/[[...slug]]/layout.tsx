export default function Layout({
    children,
    parallel
}: {
    children: React.ReactNode,
    parallel: React.ReactNode
}){
    return (
        <div>
            {children}
            {parallel}
        </div>
    )
}