import test from "@playwright/test";


test('Borken liks', async({page})=>{
    await page.goto('https://www.google.com/')
    //get all links element
    const linkElement =  page.locator('a')
    const linkCount = await linkElement.count()
    console.log(`Total links ${linkCount}`)

    for(let i=0;i<linkCount;i++)
    {
        const link = await linkElement.nth(i).getAttribute('href')

        if(!link || !link.startsWith('http')){
            console.log(`skipping invalid url ${link}`)
            continue
        }
        
        try {
            const response = await page.request.get(link)
            const status = await response.status()

            if(status >= 400)
            {
                console.log(`Broken links ${link} status ${status}`)
            }else{
                console.log(`VALID LINKS ${link} STATUS ${status}`)
            }
        } catch (error) {
            console.log(`error checking links ${link} - ${error}`)
            
        }
    }
})