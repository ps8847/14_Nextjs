/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/users',
                destination:'/',
                permanent:false
            },
            {
                source:'/users/:userId',
                destination:'/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
