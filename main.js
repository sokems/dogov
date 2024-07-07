function dogov() {
  var ss=SpreadsheetApp.getActive();
  var sheet=ss.getSheets()[0];
  var lastR=sheet.getLastRow();
  var clientData=sheet.getRange(lastR,1,1,15).getValues();
  var data=new Date(clientData[0][0]);
  var day=data.getDate(),month=data.getMonth()+1,year=data.getFullYear();

  if (month<10){
    month="0"+month;
  }

  if (clientData[0][10] == "Продвижение") {
    if (clientData[0][1] == "ООО") {
      var realdata=day+'.'+month+'.'+year;
      var num=lastR;
      var ip=clientData[0][1];
      var fio=clientData[0][2];
      var adress=clientData[0][3];
      var inn=clientData[0][4];
      var ogrn=clientData[0][5];
      var rasch=clientData[0][6];
      var bank=clientData[0][7];
      var bik=clientData[0][8];
      var korch=clientData[0][9];
      var dir=clientData[0][11];
      var dirTemp=DriveApp.getFolderById('1XMB9gMj8lCnH2anqWkciSYb1FjhfIQrl');
      var template=DriveApp.getFileById('1wT4V5t_UXsu3JZQbyGVbWywO8Of1vrPrLzX5kOHaDRk').makeCopy(fio,dirTemp).getId();
      var docbody=DocumentApp.openById(template).getBody();
      docbody.replaceText('REALDATA', realdata);
      docbody.replaceText('IP', ip);
      docbody.replaceText('FIO', fio);
      docbody.replaceText('ADRESS', adress);
      docbody.replaceText('INN', inn);
      docbody.replaceText('OGRN', ogrn);
      docbody.replaceText('RASCH', rasch);
      docbody.replaceText('BANK', bank);
      docbody.replaceText('BIK', bik);
      docbody.replaceText('KORCH', korch);
      docbody.replaceText('NUM', num);
      docbody.replaceText('DIR', dir);
      sheet.getRange(lastR, 15).setValue(template);
    }
    else {
      var realdata=day+'.'+month+'.'+year;
      var num=lastR;
      var ip=clientData[0][1];
      var fio=clientData[0][2];
      var adress=clientData[0][3];
      var inn=clientData[0][4];
      var ogrn=clientData[0][5];
      var rasch=clientData[0][6];
      var bank=clientData[0][7];
      var bik=clientData[0][8];
      var korch=clientData[0][9];
      var dir=clientData[0][11];
      var dirTemp=DriveApp.getFolderById('1XMB9gMj8lCnH2anqWkciSYb1FjhfIQrl');
      var template=DriveApp.getFileById('1NDzN1rWxMdKhKFTbGeVPWzl7iRSCJikGJjPjwjOxXxg').makeCopy(fio,dirTemp).getId();
      var docbody=DocumentApp.openById(template).getBody();
      docbody.replaceText('REALDATA', realdata);
      docbody.replaceText('IP', ip);
      docbody.replaceText('FIO', fio);
      docbody.replaceText('ADRESS', adress);
      docbody.replaceText('INN', inn);
      docbody.replaceText('OGRN', ogrn);
      docbody.replaceText('RASCH', rasch);
      docbody.replaceText('BANK', bank);
      docbody.replaceText('BIK', bik);
      docbody.replaceText('KORCH', korch);
      docbody.replaceText('NUM', num);
      docbody.replaceText('DIR', dir);
      sheet.getRange(lastR, 15).setValue(template);
    }
  }

  if (clientData[0][10] == "FBS") {
    if (clientData[0][1] == "ООО") {
      var realdata=day+'.'+month+'.'+year;
      var num=lastR;
      var ip=clientData[0][1];
      var fio=clientData[0][2];
      var adress=clientData[0][3];
      var inn=clientData[0][4];
      var ogrn=clientData[0][5];
      var rasch=clientData[0][6];
      var bank=clientData[0][7];
      var bik=clientData[0][8];
      var korch=clientData[0][9];
      var dir=clientData[0][11];
      var dirTemp=DriveApp.getFolderById('1MieZQ8sitK1k5MN7VpzzszlZePbWynbY');
      var template=DriveApp.getFileById('1vNj50Tw-eJi1KCbr3hVBB91Cg5vOsL-IhvW9YbSn3B8').makeCopy(fio,dirTemp).getId();
      var docbody=DocumentApp.openById(template).getBody();
      docbody.replaceText('REALDATA', realdata);
      docbody.replaceText('IP', ip);
      docbody.replaceText('FIO', fio);
      docbody.replaceText('ADRESS', adress);
      docbody.replaceText('INN', inn);
      docbody.replaceText('OGRN', ogrn);
      docbody.replaceText('RASCH', rasch);
      docbody.replaceText('BANK', bank);
      docbody.replaceText('BIK', bik);
      docbody.replaceText('KORCH', korch);
      docbody.replaceText('NUM', num);
      docbody.replaceText('DIR', dir);
      sheet.getRange(lastR, 15).setValue(template);
    }
    else {
      var realdata=day+'.'+month+'.'+year;
      var num=lastR;
      var ip=clientData[0][1];
      var fio=clientData[0][2];
      var adress=clientData[0][3];
      var inn=clientData[0][4];
      var ogrn=clientData[0][5];
      var rasch=clientData[0][6];
      var bank=clientData[0][7];
      var bik=clientData[0][8];
      var korch=clientData[0][9];
      var dir=clientData[0][11];
      var dirTemp=DriveApp.getFolderById('1MieZQ8sitK1k5MN7VpzzszlZePbWynbY');
      var template=DriveApp.getFileById('1nFdWbGeY9l5avAGoO2HobmFRALj7kaREIs8Xi0CWLNs').makeCopy(fio,dirTemp).getId();
      var docbody=DocumentApp.openById(template).getBody();
      docbody.replaceText('REALDATA', realdata);
      docbody.replaceText('IP', ip);
      docbody.replaceText('FIO', fio);
      docbody.replaceText('ADRESS', adress);
      docbody.replaceText('INN', inn);
      docbody.replaceText('OGRN', ogrn);
      docbody.replaceText('RASCH', rasch);
      docbody.replaceText('BANK', bank);
      docbody.replaceText('BIK', bik);
      docbody.replaceText('KORCH', korch);
      docbody.replaceText('NUM', num);
      docbody.replaceText('DIR', dir);
      sheet.getRange(lastR, 15).setValue(template);
    }
  }

  if (clientData[0][10] == "FBO") {
    if (clientData[0][1] == "ООО") {
      var realdata=day+'.'+month+'.'+year;
      var num=lastR;
      var ip=clientData[0][1];
      var fio=clientData[0][2];
      var adress=clientData[0][3];
      var inn=clientData[0][4];
      var ogrn=clientData[0][5];
      var rasch=clientData[0][6];
      var bank=clientData[0][7];
      var bik=clientData[0][8];
      var korch=clientData[0][9];
      var dir=clientData[0][11];
      var dirTemp=DriveApp.getFolderById('12c8XTgTH9kWhQC_DIM3eKrbh9i11dg_7');
      var template=DriveApp.getFileById('17puY5IAOpus47KuOAKlwKebgQUZvSlBHVQyZHZYOzro').makeCopy(fio,dirTemp).getId();
      var docbody=DocumentApp.openById(template).getBody();
      docbody.replaceText('REALDATA', realdata);
      docbody.replaceText('IP', ip);
      docbody.replaceText('FIO', fio);
      docbody.replaceText('ADRESS', adress);
      docbody.replaceText('INN', inn);
      docbody.replaceText('OGRN', ogrn);
      docbody.replaceText('RASCH', rasch);
      docbody.replaceText('BANK', bank);
      docbody.replaceText('BIK', bik);
      docbody.replaceText('KORCH', korch);
      docbody.replaceText('NUM', num);
      docbody.replaceText('DIR', dir);
      sheet.getRange(lastR, 15).setValue(template);
    }
    else {
      var realdata=day+'.'+month+'.'+year;
      var num=lastR;
      var ip=clientData[0][1];
      var fio=clientData[0][2];
      var adress=clientData[0][3];
      var inn=clientData[0][4];
      var ogrn=clientData[0][5];
      var rasch=clientData[0][6];
      var bank=clientData[0][7];
      var bik=clientData[0][8];
      var korch=clientData[0][9];
      var dir=clientData[0][11];
      var dirTemp=DriveApp.getFolderById('12c8XTgTH9kWhQC_DIM3eKrbh9i11dg_7');
      var template=DriveApp.getFileById('1JRjheHzdvcjDOtZezby1FixYBQ_AQy6ZyE-yK9c3eiA').makeCopy(fio,dirTemp).getId();
      var docbody=DocumentApp.openById(template).getBody();
      docbody.replaceText('REALDATA', realdata);
      docbody.replaceText('IP', ip);
      docbody.replaceText('FIO', fio);
      docbody.replaceText('ADRESS', adress);
      docbody.replaceText('INN', inn);
      docbody.replaceText('OGRN', ogrn);
      docbody.replaceText('RASCH', rasch);
      docbody.replaceText('BANK', bank);
      docbody.replaceText('BIK', bik);
      docbody.replaceText('KORCH', korch);
      docbody.replaceText('NUM', num);
      docbody.replaceText('DIR', dir);
      sheet.getRange(lastR, 15).setValue(template);
    }
  }


 }


