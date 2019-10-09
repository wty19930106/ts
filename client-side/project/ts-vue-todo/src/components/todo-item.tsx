import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator';
import './index.less';

interface Item {
	text: string;
	complete: boolean;
}
@Component({
	name: 'TodoItem',
})
export default class TodoItem extends Vue {
	@Prop(Object) public item!: Item;
	@Prop(Number) public index!: number;
	@Prop(Number) public edittingIndex!: number;
	public edittingContent = '';
	@Watch('edittingIndex')
	public edittingIndexChange(index) {
		if (index === this.index) {
			this.edittingContent = this.item.text;
		} else {
			this.edittingContent = '';
		}
	}
	// public save() {
	// 	this.$emit('on-save', {
	// 		index: this.index,
	// 		content: this.edittingContent,
	// 	});
	// }
	@Emit('on-save')
	public save(index, content, event) {
		event.stopPropagation();
		return {
			index,
			content,
		};
	}

	@Emit('on-edit')
	public onEdit(event) {
		event.stopPropagation();
		return this.index;
	}

	public cancel(event) {
		event.stopPropagation();
		this.$emit('on-cancel');
	}

	public complete() {
		this.$emit('on-complete', this.index);
	}
	protected render() {
		return (
			<li class='item-wrap'>
				{
				this.edittingIndex === this.index
				? (<div>
					<a-input v-model={this.edittingContent} style='width: 200px;'></a-input>
					<a-icon type='check' nativeOn-Click={this.save.bind(this, this.index, this.edittingContent)}></a-icon>
					<a-icon type='close' nativeOn-Click={this.cancel}></a-icon>
				</div>)
				: (<div>
					<span
					on-click={this.complete}
					style={this.item.complete
					? {textDecoration: 'line-through'}
					: {}}>{ this.item.text }</span>
					<a-icon type='edit' nativeOn-Click={this.onEdit}></a-icon>
				</div>)
				}
			</li>
		);
	}
}
