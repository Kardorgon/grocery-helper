import { newE2EPage } from '@stencil/core/testing'

describe('app-root', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/' })

    const element = await page.find('app-root')
    expect(element).toHaveClass('hydrated')
  })

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/' })

    const element = await page.find('app-root ion-title')
    expect(element.textContent).toEqual('Home')
  })

  it('navigates to home page on startup', async () => {
    const page = await newE2EPage({ url: '/' })

    const url = await page.url()
    expect(url).toContain('/home')
  })

  it('navigates to notice page and refreshes', async () => {
    const page = await newE2EPage({ url: '/home' })

    await page.click('ion-button[href="/notice"]')
    await page.waitForChanges()

    const url = await page.url()
    expect(url).toContain('/notice')

    const element = await page.find('page-notice')
    expect(element).not.toBeNull()
  })

  it('navigates to profile page and refreshes', async () => {
    const page = await newE2EPage({ url: '/notice' })

    await page.click('ion-item[href="/profile/alice"]')
    await page.waitForChanges()

    const url = await page.url()
    expect(url).toContain('/profile/alice')

    const element = await page.find('page-profile')
    expect(element).not.toBeNull()
  })

  it('displays the menu when burger menu icon is clicked', async () => {
    const page = await newE2EPage({ url: '/' })

    const menuButton = await page.find('ion-menu-button')
    await menuButton.click()
    await page.waitForChanges()

    const menu = await page.find('ion-menu')
    expect(menu).toHaveClass('show-menu')
  })

  it('keeps the burger menu icon visible after clicking', async () => {
    const page = await newE2EPage({ url: '/' })

    const menuButton = await page.find('ion-menu-button')
    await menuButton.click()
    await page.waitForChanges()

    const menuButtonAfterClick = await page.find('ion-menu-button')
    expect(menuButtonAfterClick).not.toBeNull()
  })
})
