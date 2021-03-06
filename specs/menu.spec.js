describe('xfocus login', function () {
  var baseUrl = 'http://xfocus.id.localhost';
  var cl_no = '111';
  var username = 'TRIAL';
  var password = 'TRIAL';

  it('should login to dashboard', async function () {
    await browser.get(baseUrl);
    element(by.model('login.cl_no')).sendKeys(cl_no);
    element(by.buttonText('Lanjut')).click();
    element(by.model('login.username')).sendKeys(username);
    element(by.model('login.password')).sendKeys(password);
    element(by.partialButtonText('Masuk')).click();
    expect(browser.getTitle()).toEqual('Dashboard');
    element(by.buttonText('OK')).click();
  });

/*   it('should go to Open Locked', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    await browser.get('http://xfocus.id.localhost/#/openlocked');
    expect(browser.getTitle()).toEqual('Open Locked');
    expect(element.all(by.css('[ng-click="unlockIt(data.id, data.column, data.column_id, data.table)"]')).count()).toEqual(0);
    await browser.get('http://xfocus.id.localhost/#/area');
    expect(browser.getTitle()).toEqual('Cabang');
    await browser.get('http://xfocus.id.localhost/#/openlocked');
    // expect(element.all(by.css('[ng-click="unlockIt(data.id, data.column, data.column_id, data.table)"]')).count()).toEqual(1);
    // await element(by.css('[ng-click="unlockIt(data.id, data.column, data.column_id, data.table)"]')).click();
    // expect(element.all(by.css('[ng-click="unlockIt(data.id, data.column, data.column_id, data.table)"]')).count()).toEqual(0);
  }); */

  /* it('should go to Cabang', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    browser.get('http://xfocus.id.localhost/#/area');
    expect(browser.getTitle()).toEqual('Cabang');
  });

  it('should go to Pegawai', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    await browser.get('http://xfocus.id.localhost/#/pegawai');
    expect(browser.getTitle()).toEqual('Pegawai');

  });

  it('should go to User & Akses', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    await browser.get('http://xfocus.id.localhost/#/user');
    expect(browser.getTitle()).toEqual('User & Akses');
  });

  it('should go to Departemen', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    await browser.get('http://xfocus.id.localhost/#/departemen');
    expect(browser.getTitle()).toEqual('Departemen');
    await browser.get('http://xfocus.id.localhost/#/departemen/add');
    element(by.model('input.departemen_name')).sendKeys('SAMPLENAMADEPARTEMEN');
    element(by.partialButtonText('Simpan')).click();
    element(by.css('[ng-click="back_page(\'TAMBAH\')"]')).click();
  }); */

  it('pegawai', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(90000);
    await browser.get('http://xfocus.id.localhost/#/pegawai/add');

    console.log(protractor.key);


    await element(by.model('input.pegawai_area_id')).$('[value="50"]').click();
    element(by.model('input.cbox')).click();

    await element(by.model('input.pegawai_name')).sendKeys('Sample Nama Pegawai');
    await element(by.model('input.pegawai_tgl_lahir')).sendKeys('01 Jan 2000');
    // browser.actions().sendKeys(protractor.Key.ESC).perform();
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
    // await element(by.model('input.pegawai_tmk')).sendKeys('01 Jan 2018');
    // browser.actions().sendKeys(protractor.Key.ESC).perform();
    // browser.sleep(6000);
    // await element(by.partialButtonText('Simpan')).click();
    browser.sleep(30000);

  });

/*   it('should test select2', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    await browser.get('http://xfocus.id.localhost/#/user');

    var row = await element.all(by.repeater('data in dataView')).filter(
      async function (elem, index) {
        var bindingDataUser = await elem.element(by.binding('data.user')).getText();
        return bindingDataUser === 'TRIAL';
      }
    ).first();

    await row.element(by.css('[ng-click="cekEdit(data.id)"]')).click();
    browser.sleep(6000);

    await element(by.partialButtonText('Simpan')).click();
    browser.sleep(6000);

    // await element(by.model('input.user_area_id')).$('[value="50"]').click();
    // await element(by.model('input.auto_pegawai')).sendKeys('T');
    // await element(by.model('input.auto_pegawai')).sendKeys(protractor.Key.ENTER);

    // browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }); */

  it('should go to Logout', function () {
    browser.get('http://xfocus.id.localhost/index.php/login/out');
  });
});
