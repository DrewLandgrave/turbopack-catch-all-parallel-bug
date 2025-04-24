export default async function Page({ params }: { params: { slug: string[] } }) {
    // This is a server component, so you can fetch data directly here
    // const data = await fetchData();
    
    return (
        <div>
        <h1>Catch all Page</h1>        
        </div>
    );
}