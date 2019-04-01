var timerBuildingPath;

function newMaze(x, y) {

	var totalCells = x*y;
	var cells = new Array();
	var unvis = new Array();
	for (var i = 0; i < y; i++) {
		cells[i] = new Array();
		unvis[i] = new Array();
		for (var j = 0; j < x; j++) {
			cells[i][j] = [0,0,0,0];
			unvis[i][j] = true;
		}
	}
	
	var currentCell = [Math.floor(Math.random()*y), Math.floor(Math.random()*x)];
	var path = [currentCell];
	unvis[currentCell[0]][currentCell[1]] = false;
	var visited = 1;
	
	while (visited < totalCells) {
		var pot = [
					[currentCell[0]-1, currentCell[1], 0, 2],
					[currentCell[0], currentCell[1]+1, 1, 3],
					[currentCell[0]+1, currentCell[1], 2, 0],
					[currentCell[0], currentCell[1]-1, 3, 1]
				];
		var neighbors = new Array();
		
		for (var l = 0; l < 4; l++) {
			if (pot[l][0] > -1 && pot[l][0] < y && pot[l][1] > -1 && pot[l][1] < x && unvis[pot[l][0]][pot[l][1]]) { neighbors.push(pot[l]); }
		}
		
		if (neighbors.length) {
			next = neighbors[Math.floor(Math.random()*neighbors.length)];

			cells[currentCell[0]][currentCell[1]][next[2]] = 1;
			cells[next[0]][next[1]][next[3]] = 1;
			
			unvis[next[0]][next[1]] = false;
			visited++;
			currentCell = [next[0], next[1]];
			path.push(currentCell);
		} else {
			currentCell = path.pop();
		}
	}
	return cells;
}

function findPath(maze) {

	var maxY = $(maze).find("tr:last").index();
	var maxX = $(maze).find("tr:last").find("td:last").index();

	// определяем стартовую ячейку
	var startCell = $(maze).find("tr").eq(0).find("td").eq(0);

	// определяем финальную ячейку
	var finalCell = $(maze).find("tr:last").find("td:last");

	// ставим аттрибут стартовой ячейке для инициализации волновой функции
	startCell.attr('data-wave', 0);

	//обходим рекурсию
	for(a = 0; a <= maxY*maxX; a++) {
		
		// прерываем алгоритм когда дойдёт до финальной ячейки
		if (finalCell.attr('data-wave')) {
			break;
		}

		$(maze).find("td[data-wave='" +a+ "']:not([data-old])").each(function() {
			waveCount($(this), maxY, maxX);
		});
	};

}
	
function waveCount(cell) {

	var cellY = $(cell).closest("tr").index();
	var cellX = $(cell).index();
	
	var d = +$(cell).attr('data-wave') + 1;
	if (d == 1) {
		$(cell).text(cell.attr('data-wave'));
	};

	// сокращаем код длинных селекторов
	var cellTop = $(maze).find("tr").eq(cellY - 1).find("td").eq(cellX);
	var cellRight = $(maze).find("tr").eq(cellY).find("td").eq(cellX + 1);
	var cellBottom = $(maze).find("tr").eq(cellY + 1).find("td").eq(cellX);
	var cellLeft = $(maze).find("tr").eq(cellY).find("td").eq(cellX - 1);

	// ставим аттрибут, чтобы повторно не проходить элемент
	$(cell).attr('data-old', '1');

	// запускаем волновую функцию для соседей
	if (cellTop && (cellY - 1) >= 0 && cell.css('border-top-width') == '0px' && !cellTop.attr('data-wave')) {
		$(cellTop).text(d);
		cellTop.attr('data-wave', d);
	};
	if (cellRight  && cell.css('border-right-width') == '0px' && !cellRight.attr('data-wave')) {
		$(cellRight).text(d);
		cellRight.attr('data-wave', d);
	};
	if (cellBottom && cell.css('border-bottom-width') == '0px' && !cellBottom.attr('data-wave')) {
		$(cellBottom).text(d);
		cellBottom.attr('data-wave', d);
	};
	if (cellLeft && (cellX - 1) >= 0 && cell.css('border-left-width') == '0px' && !cellLeft.attr('data-wave')) {
		$(cellLeft).text(d);
		cellLeft.attr('data-wave', d);
	};
}

function buildPath(cell) {
	var cellY = $(cell).closest("tr").index();
	var cellX = $(cell).index();
	
	cell.addClass('cellPath');
	var d = +$(cell).attr('data-wave');
	if (d == 0) {
		return;
	};

	

	// сокращаем код длинных селекторов
	var cellTop = $(maze).find("tr").eq(cellY - 1).find("td").eq(cellX);
	var cellRight = $(maze).find("tr").eq(cellY).find("td").eq(cellX + 1);
	var cellBottom = $(maze).find("tr").eq(cellY + 1).find("td").eq(cellX);
	var cellLeft = $(maze).find("tr").eq(cellY).find("td").eq(cellX - 1);
	
	// запускаем волновую функцию для соседей
	if (cellTop && (cellY - 1) >= 0 && cell.css('border-top-width') == '0px' && (cellTop.attr('data-wave') == (d - 1))) {
		buildPath(cellTop);
	} else if (cellRight  && cell.css('border-right-width') == '0px' && (cellRight.attr('data-wave') == (d - 1))) {
		buildPath(cellRight);
	} else if (cellBottom && cell.css('border-bottom-width') == '0px' && (cellBottom.attr('data-wave') == (d - 1))) {
		buildPath(cellBottom);
	}else if (cellLeft && (cellX - 1) >= 0 && cell.css('border-left-width') == '0px' && (cellLeft.attr('data-wave') == (d - 1))) {
		buildPath(cellLeft);
	};
}

function showBuildingPath(count) {
	
	var i = 0;
	timerBuildingPath = setInterval(function() {
		if ((i - 5) > count) {clearInterval(timerBuildingPath)};
		$(".cellPath[data-wave='" +i+ "']").css('background-color','red');
		$(".cellPath[data-wave='" +(i - 5)+ "']").css('background-color','rgba(255, 0, 0, 0.3)');
		i++;
	}, 100);
}

$(document).ready(function() {

	var countY = 25;
	var countX = 25;

	$("#generateMaze").on("click", function(event) {

		$('#maze > tbody').empty();


		if (isNaN($("#countY").val())) {
			alert("Введите числовое значение высоты лабиринта");
		} else {
			if ($("#countY").val() >= 10 && $("#countY").val() <= 50) {
				countY = $("#countY").val();
			} else if ($("#countY").val() == '') {} else {
				alert("Высота лабиринта должна быть от 10 до 50 клеток");
			};
		};

		if (isNaN($("#countX").val())) {
			alert("Введите числовое значение ширины лабиринта");
		} else {
			if ($("#countX").val() >= 10 && $("#countX").val() <= 50) {
				countX = $("#countX").val();
			} else if ($("#countX").val() == '') {} else {
				alert("Ширина лабиринта должна быть от 10 до 50 клеток");
			};
		};


		var disp = newMaze(countX, countY);

		for (var i = 0; i < disp.length; i++) {
			$('#maze > tbody').append("<tr>");
			for (var j = 0; j < disp[i].length; j++) {
				var selector = i+"-"+j;
				$('#maze > tbody > tr').eq(i).append("<td id='"+selector+"'>&nbsp;</td>");
				if (disp[i][j][0] == 0) { $('#'+selector).css('border-top', '3px solid black'); }
				if (disp[i][j][1] == 0) { $('#'+selector).css('border-right', '3px solid black'); }
				if (disp[i][j][2] == 0) { $('#'+selector).css('border-bottom', '3px solid black'); }
				if (disp[i][j][3] == 0) { $('#'+selector).css('border-left', '3px solid black'); }
			};
			$('#maze > tbody').append("</tr>");
		};
		$('#maze > tbody tr').eq(0).find('td').eq(0).css('border-left', 'none');
		$('#maze > tbody tr').eq(disp.length - 1).find('td').eq(disp[disp.length - 1].length - 1).css('border-right', 'none');

		event.preventDefault();
	});

	$("#calcPath").on("click", function(event) {
		var finalCell = $(maze).find("tr:last").find("td:last");
		findPath("#maze");
		clearInterval(timerBuildingPath);
		$("td").css('background-color','transparent');
		buildPath(finalCell);
		event.preventDefault();
	});
	
	$("#showPath").on("click", function(event) {
		var finalCell = $(maze).find("tr:last").find("td:last");
		findPath("#maze");
		buildPath(finalCell);
		clearInterval(timerBuildingPath);
		$("td").css('background-color','transparent');
		showBuildingPath(+$(finalCell).attr('data-wave'));
		event.preventDefault();
	});
});