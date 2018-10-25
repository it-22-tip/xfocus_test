describe('xfocus login', function () {

  it('should login to dashboard', async function () {
    await browser.get(browser.params.base_url);
    element(by.model('login.cl_no')).sendKeys(browser.params.cl_no);
    element(by.buttonText('Lanjut')).click();
    element(by.model('login.username')).sendKeys(browser.params.username);
    element(by.model('login.password')).sendKeys(browser.params.password);
    element(by.partialButtonText('Masuk')).click();
    expect(browser.getTitle()).toEqual('Dashboard');
    element(by.buttonText('OK')).click();
  });

  it('Menambah Pegawai', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(24000);
    await browser.get(`${browser.params.base_url}/#/pegawai/add`);

    await element(by.model('input.pegawai_area_id')).$('[value="50"]').click();
    // await element(by.model('input.cbox')).click();
    await element(by.model('input.pegawai_no')).sendKeys('34563456');
    await element(by.model('input.pegawai_name')).sendKeys('Sample Nama Pegawai');
    await element(by.model('input.pegawai_tgl_lahir')).sendKeys('01 Jan 2000');
    await element(by.model('input.pegawai_tgl_lahir')).sendKeys(protractor.Key.ESCAPE);
    await element(by.model('input.pegawai_tempat_lahir')).sendKeys('Surabaya');
    await element(by.model('input.pegawai_kelamin')).$('[value="L"]').click();
    await element(by.model('input.pegawai_telp')).sendKeys('0800800800');
    await element(by.model('input.pegawai_identitas')).$('[value="KTP"]').click();
    await element(by.model('input.pegawai_no_identitas')).sendKeys('338877210');
    await element(by.model('input.pegawai_agama')).sendKeys('ISLAM');
    await element(by.model('input.pegawai_pendidikan_terakhir_jenjang')).sendKeys('SMA');
    await element(by.model('input.pegawai_pendidikan_terakhir_jurusan')).sendKeys('IPA');
    await element(by.model('input.pegawai_pendidikan_terakhir_thn_lulus')).sendKeys('2016');
    await element(by.model('input.pegawai_alamat_ktp')).sendKeys('Sukoharjo');
    await element(by.model('input.pegawai_alamat_domisili')).sendKeys('Sragen');
    await element(by.model('input.pegawai_alias')).sendKeys('Alias Sample Nama Pegawai');
    await element(by.model('input.pegawai_tmk')).clear();
    await element(by.model('input.pegawai_tmk')).sendKeys('01 Jan 2018');
    await element(by.model('input.pegawai_tmk')).sendKeys(protractor.Key.ESCAPE);

    // Menggunakan ini karena element ga bisa di click
    browser.executeScript('arguments[0].click()', browser.driver.findElement(By.css('[ng-click="create()"]')));
    await browser.sleep(6000);
    browser.executeScript('arguments[0].click()', browser.driver.findElement(By.css('[ng-click="backPage(\'Tambah\')"]')));
    await browser.sleep(3000);
  });

  it('menghapus pegawai', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(24000);
    await browser.get('http://xfocus.id.localhost/#/pegawai');

    await element(by.model('$localStorage.Pegawai.search.no_pegawai')).sendKeys('34563456');
    await element(by.model('$localStorage.Pegawai.search.no_pegawai')).sendKeys(protractor.Key.ENTER)
    browser.sleep(3000);
    var row = await element.all(by.repeater('data in dataView')).filter(
      async function (elem, index) {
        var bindingDataUser = await elem.element(by.binding('data.no_pegawai')).getText();
        return bindingDataUser === '34563456';
      }
    ).first();

    await row.element(by.css('[ng-click="delete(data.id,data.pegawai)"]')).click();
    browser.sleep(3000);
    element(by.buttonText('OK')).click();
    browser.sleep(12000);
  });

  it('should go to Logout', function () {
    browser.get('http://xfocus.id.localhost/index.php/login/out');
  });
});
