/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source:'/users',
                destination:'/',
                permanent:false
            }
        ]
    }
}

module.exports = nextConfig
