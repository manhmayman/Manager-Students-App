var readlineSync = require('readline-sync');
var fs = require('fs');
function showOption(){
	console.log('1.Nhập thông tinh sinh viên');
	console.log('2.Sửa thông tin sinh viên');
	console.log('3.Xóa sinh viên');
	console.log('4.Tìm kiếm sinh viên');
	console.log('5.Danh sách sinh viên');
}
function loadData(){
	var dataSV = fs.readFileSync('./sinhvien.json');
	var students = JSON.parse(dataSV);
	return students;
}
function main(){
	showOption();
	loadData();
	var option = readlineSync.question('Nhap lua chon cua ban : ');
	switch(option){
		case '1':
		addSV();
		break;
		case '2':
		repairSV();
		break;
		case '3':
		deleteSV();
		break;
		case '4':
		findSV();
		break;
		case '5':
		totalSV();
		break
		default:
		console.log('Wrong option!!');
		break;
	}
}

//1.
function addSV(){
	var maSV = readlineSync.question('Ma sinh vien : ');
	var hoVaTen = readlineSync.question('Ho va Ten : ');
	var SDT = readlineSync.question('So dien thoai : ');
    var newSV = {
    	studenCode:maSV,
    	name:hoVaTen,
    	phoneNumber:SDT
    }
    var dataSV = fs.readFileSync('./sinhvien.json');
	var students = JSON.parse(dataSV);
	students.push(newSV);
	var student=JSON.stringify(students);
	fs.writeFileSync('./sinhvien.json',student);
  }
2.
function repairSV(){
	var repair = readlineSync.question('Ma sinh vien can sua : ');
	var dataSV = fs.readFileSync('./sinhvien.json');
	var students = JSON.parse(dataSV);
	for ( var i=0 ; i<students.length; i++){
		if (students[i].studenCode == repair){
			var newHVT = readlineSync.question('Ho va ten moi : ');
			var newSDT = readlineSync.question('So dien thoai moi : ');
			students[i].name = newHVT;
			students[i].phoneNumber = newSDT;
			var student=JSON.stringify(students);
	        fs.writeFileSync('./sinhvien.json',student);
		}
	}
} 
//3.
function deleteSV(){
	var del = readlineSync.question('Ma sinh vien can xoa : ');
	var dataSV = fs.readFileSync('./sinhvien.json');
	var students = JSON.parse(dataSV);
	for ( var i=0 ; i<students.length; i++){
		if (students[i].studenCode == del){
			students.splice(i,1);
			var student=JSON.stringify(students);
	        fs.writeFileSync('./sinhvien.json',student);
		}
    }
}
//4.
function findSV(){
	var dataSV = fs.readFileSync('./sinhvien.json');
	var students = JSON.parse(dataSV);
	var find = readlineSync.question('Ma sinh vien can tim :');
	for ( var i=0 ; i<students.length; i++){
		if (students[i].studenCode == find){
			console.log(students[i]);
		}
	}
}
//5.
function totalSV(){
	var dataSV = fs.readFileSync('./sinhvien.json');
	var students = JSON.parse(dataSV);
	console.log(students);
}
loadData();
main();