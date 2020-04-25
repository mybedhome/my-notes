聚合管道阶段操作符包括$match,$project,$group,$sort,$unwind,$redact,$geoNear,$out

聚合管道表达式操作符 

$match用法和find中的第一个参数query类似(用于过滤文档)，$project与find方法中的第二个参数类似(过滤字段)，
聚合管道操作中，$group和$sort在默认情况下只能在内存中进行，聚合管道的每个阶段最大占用内存为100M,如果处理数据很大，可以使用allowDiskUse选项，将部分数据存储到磁盘上。

/=============管道操作符$unwind=============/
$unwind 将文档按照数组字段拆分成多条文档，每条文档包含数组中的一个元素,如:

原文档:{"_id":'1',"item":'ABC',sizes:['W','U','H']}

db.test.aggregate([{$unwind:"$sizes"}];

输出
{"_id":'1',"item":'ABC',sizes:'W'}
{"_id":'1',"item":'ABC',sizes:'U'}
{"_id":'1',"item":'ABC',sizes:'H'}

/*关于使用$unwind需要注意的问题*/
1,$unwind参数数组字段为空或不存在时，待处理的文档将会被忽略，不会产生任何输出
2,$unwind参数不是数组类型时，将抛出一个错误
3,$unwind所作的修改只用于输出，不会改变原文档的内容

/=============管道操作符$getNear=============/

/=============管道操作符$redact=============/
$redact限制单条文档内容的显示，可以控制只输出部分字段，比$project更灵活，例如:

db.test.aggregate([
{$redact:{
	$cond:{
		if:{$eq:["$level",5]},
		then:"$$PRUNE", //$$PRUNE表示满足条件的当前层次的文档(可以是子文档)全部过滤不输出，包括其子文档
		else:"$$DESCEND" //$$DESCEND表示只显示当前层次的文档，其子文档过滤不输出
	}
}}
])

例子
//原文档
{
	_id:1,
	level:1,
	acc_d:'xyz123',
	cc:{
		level:5,
		type:'db',
		addr:{
			level:5,
			city:'beijing'
		}
	},
	status:'online'
}

//通过上面的聚合语句对原文档进行处理后的输出结果
{_id:1,level:1,acc_d:'xyz123',status:'online'}



/*=============管道操作符$out=============*/
$out的参数为集合的名字，用于将处理结果输出到指定的集合中。默认情况下，聚合操作的结果是缓存到内存中。如：

//将数据插入到Student集合
db.test.aggregate([
	{$match:{age:{$gt:25}}},
	{$group:{_id:'$name',total:{$sum:"$score"}}},
	$out:'Student'
]);

//*关于使用$out需要注意的问题*/
1,输出集合不能是分片集合和固定集合
2,输出集合不存在时，在管道命令执行完毕的时候会自动创建该集合
3,若指定的输出集合存在，则会覆盖原集合中的文档