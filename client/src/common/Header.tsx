import HeaderInterface from "../interface/HeaderInterface";

export default function HeaderCommon({ name }: HeaderInterface) {
  return (
    <div className="text-center mt-3">
      <h2>{name}</h2>
    </div>
  );
}
